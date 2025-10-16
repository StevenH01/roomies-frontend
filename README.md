# Roomies — Student Roommate Finder (MVP)

Safe, campus‑verified platform for students to find compatible roommates and housing near their university.

---

## ✨ Overview

* **Public marketing/landing** to explain the product and collect early signups.
* **Auth pages**: sign in / sign up (Supabase Auth: magic link or password).
* **Protected app**: create & browse roommate posts, manage profile.
* **Server‑only mutations** via **Next.js Route Handlers** under `/app/api/*`.
* **Supabase** for Auth + Postgres with **Row‑Level Security (RLS)** to enforce safety rules.

> Goal: Only verified students at **partner schools** can access student features; users can only CRUD their own posts; and students only see posts for their own school. Admin/Engineer bypasses apply where noted.

---

## 🏗 Architecture (High Level)

```
Next.js (App Router)
├── Public pages: / (landing), /privacy, /terms
├── Auth pages: /sign-in, /sign-up
├── App pages (protected): /app (feed), /app/create, /app/profile
└── Route Handlers (server-only): /app/api/* (posts, profile, admin)

Supabase
├── Auth (email link or password)
├── Postgres (tables: schools, profiles, posts)
└── RLS policies (see below)
```

---

## 🧰 Tech Stack

* **Next.js 14+ (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Supabase**: Auth + Postgres + RLS

No UI libraries required for the marketing/landing; all components are Tailwind + inline SVG.

---

## ⚙️ Getting Started (Local)

### 1) Prereqs

* Node.js **18+** (or 20+)
* npm / pnpm / yarn
* Supabase project (cloud or local via Supabase CLI)

### 2) Install

```bash
# clone your repo
npm i
# or: pnpm i / yarn
```

### 3) Environment

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# server-only — DO NOT expose to the browser
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# optional
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Important:** Only use `SUPABASE_SERVICE_ROLE_KEY` in **server** contexts (e.g., Route Handlers). Never import it in client components.

### 4) Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🗃 Database Schema (SQL)

Below is a minimal schema to support partner schools, student profiles, and roommate posts.

```sql
-- Enable required extensions
create extension if not exists pgcrypto; -- for gen_random_uuid()

-- 1) Partner schools (domain allowlist)
create table if not exists public.schools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text not null unique,      -- e.g., 'csus.edu'
  is_partner boolean not null default false,
  created_at timestamptz not null default now()
);

-- 2) Profiles, 1:1 with auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text not null,
  school_id uuid references public.schools(id),
  role text not null default 'student' check (role in ('student','admin','engineer')),
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

-- 3) Roommate posts
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  school_id uuid not null references public.schools(id) on delete cascade,
  title text not null,
  description text,
  rent integer,
  room_type text check (room_type in ('Private room','Shared room')) default 'Private room',
  tags text[],
  distance numeric, -- miles from campus, optional
  created_at timestamptz not null default now()
);
alter table public.posts enable row level security;
```

> **Deriving `school_id`:** In your server logic, parse the user’s email domain (e.g., `foo@csus.edu` → `csus.edu`) and join to `schools.domain`. Deny student features if the school is not marked `is_partner = true`.

---

## 🔐 RLS Policies

The following policies encode the MVP rules. Adjust naming to your conventions.

```sql
-- Helper: is_admin_or_engineer (for readability)
create or replace function public.is_admin_or_engineer(uid uuid)
returns boolean language sql stable as $$
  select exists (
    select 1 from public.profiles p
    where p.id = uid and p.role in ('admin','engineer')
  );
$$;

-- PROFILES: users can read/update only their own profile; admins/engineers can read all
create policy "Read own profile or admin" on public.profiles
for select using (
  auth.uid() = id or public.is_admin_or_engineer(auth.uid())
);

create policy "Update own profile or admin" on public.profiles
for update using (
  auth.uid() = id or public.is_admin_or_engineer(auth.uid())
) with check (
  auth.uid() = id or public.is_admin_or_engineer(auth.uid())
);

-- POSTS: students can read posts for *their* school (must be a partner school)
create policy "Students read posts for their partner school" on public.posts
for select using (
  public.is_admin_or_engineer(auth.uid())
  or exists (
    select 1
    from public.profiles p
    join public.schools s on s.id = p.school_id
    where p.id = auth.uid()
      and s.is_partner = true
      and p.school_id = posts.school_id
  )
);

-- POSTS: create only for own school (partner only), authored by self
create policy "Students create posts for own partner school" on public.posts
for insert with check (
  (public.is_admin_or_engineer(auth.uid()))
  or (
    exists (
      select 1 from public.profiles p
      join public.schools s on s.id = p.school_id
      where p.id = auth.uid() and s.is_partner = true and p.school_id = posts.school_id
    )
    and posts.author_id = auth.uid()
  )
);

-- POSTS: update/delete only own posts; admin/engineer bypass
create policy "Update own posts or admin" on public.posts
for update using (
  public.is_admin_or_engineer(auth.uid()) or posts.author_id = auth.uid()
) with check (
  public.is_admin_or_engineer(auth.uid()) or posts.author_id = auth.uid()
);

create policy "Delete own posts or admin" on public.posts
for delete using (
  public.is_admin_or_engineer(auth.uid()) or posts.author_id = auth.uid()
);
```

**What these enforce**

* ✅ Only **partner‑school** students get read access to student content.
* ✅ Users can **CRUD only their own** posts.
* ✅ **Admin/Engineer** can bypass for moderation/testing.

---

## 🔌 API (Next.js Route Handlers)

Server‑only endpoints under `/app/api/*`. Example pattern for posts:

```
/app/api/posts/route.ts        → GET (list), POST (create)
/app/api/posts/[id]/route.ts   → GET (detail), PATCH (update), DELETE (remove)
```

**Create post (example)**

```ts
// app/api/posts/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only
  { auth: { persistSession: false } }
)

export async function POST(req: Request) {
  const { title, description, rent, room_type, tags } = await req.json()

  // 1) Resolve user via cookies / headers (e.g., Supabase auth token) — omitted for brevity
  // const userId = ...

  // 2) Lookup user profile & school
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, school_id')
    .eq('id', /* userId */ '')
    .single()

  if (!profile?.school_id) return NextResponse.json({ error: 'No school found' }, { status: 403 })

  // 3) Insert (RLS will still enforce author ownership & partner school)
  const { data, error } = await supabase
    .from('posts')
    .insert({
      author_id: /* userId */ '',
      school_id: profile.school_id,
      title, description, rent, room_type, tags
    })
    .select('*')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json(data)
}
```

> You’ll wire up auth context (e.g., read Supabase session via cookies/headers) so `userId` is the authenticated user. The RLS policies are the final gate.

---

## 🔑 Auth Notes (Supabase)

* Choose **Magic Link** or **Email + Password** in your Supabase Auth settings.
* Require email confirmation.
* On signup, derive `school_id` by comparing the user’s email domain to `schools.domain`. If no partner match, either reject or set a flag to limit access to student features.

**Domain parsing (server)**

```ts
function emailDomain(email: string) {
  return email.split('@')[1]?.toLowerCase() || ''
}
```

---

## 🧭 Frontend

* **Marketing/Landing** follows your Figma palette; no external component libs.
* **Explore UI**: search segments (Campus, Move‑in, Budget, Room type), filter chips, results grid, sticky CTA.
* **App** (protected): feed of posts, create post form, profile.

> The interactive landing currently uses a mock array. Swap in your API when ready.

---

## 🚨 Security Checklist (MVP)

* [ ] Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.
* [ ] Enable **RLS** on all app tables.
* [ ] Validate `.edu` and partner school domain on signup.
* [ ] Rate‑limit write endpoints (basic token bucket or IP window).
* [ ] Log admin actions.

---

## 📦 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

## 🗺 Roadmap (Next)

* Campus autocomplete & school picker
* In‑app messaging (moderated)
* Map view for listings
* Verified badge (ID + .edu)
* Report/Block flows & moderation dashboard (admin)

---

## 📝 License

Proprietary (update as needed).

---

## 🙌 Contributing (Internal)

1. Open a small PR.
2. Add screenshots when UI changes.
3. Keep SQL migrations idempotent and include RLS changes.
