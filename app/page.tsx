import Image from "next/image";
import "./globals.css"

export default function LandingIntro() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
      {/* soft background ornaments */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
             style={{ background: "radial-gradient(60% 60% at 50% 50%, var(--accent), transparent)" }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
             style={{ background: "radial-gradient(50% 50% at 50% 50%, var(--brand), transparent)" }} />
      </div>

      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg)]/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-lg bg-[color:var(--brand)] bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/room-logo.png')" }} // file in /public
            />
            <span className="text-sm font-semibold tracking-wide text-[color:var(--brand-ink)]">Roomies</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
            <a className="hover:text-[color:var(--brand-ink)]" href="#about">Overview</a>
            <a className="hover:text-[color:var(--brand-ink)]" href="#safety">Safety</a>
            <a className="hover:text-[color:var(--brand-ink)]" href="#faq">FAQ</a>
          </nav>
          <a href="#waitlist" className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-sm font-medium hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]">
            Join waitlist
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:pt-24">
        {/* Hero */}
        <section id="about" className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-1 text-xs font-medium text-[color:var(--brand-ink)]/90">
              New • Student‑only beta
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[color:var(--brand-ink)] md:text-6xl">
              Find trusted college roommates.
              <br className="hidden sm:block" />
              Campus‑verified. Safety‑first.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
              Roomies is a safe place for students to find compatible roommates and housing near campus. Every profile is verified, communities are school‑based, and safety tools come built‑in.
            </p>

            {/* Safety ribbon */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-xs text-[color:var(--brand-ink)]/90">
              <span className="inline-flex items-center gap-1">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                .edu email verification
              </span>
              <span className="inline-flex items-center gap-1">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                Optional ID checks
              </span>
              <span className="inline-flex items-center gap-1">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                Report & block controls
              </span>
            </div>

            {/* Featured campuses */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wide text-[color:var(--muted)]">Growing across campuses</p>
              <div className="mt-3 grid grid-cols-3 gap-4 opacity-80 sm:grid-cols-6">
                {["CSUS", "UCD", "SJSU", "UCLA", "UCSD", "ASU"].map((l) => (
                  <div key={l} className="flex h-10 items-center justify-center rounded-md border border-[color:var(--ring)] bg-[color:var(--card)] text-[11px] font-medium">
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Waitlist Card */}
          <div id="waitlist" className="md:justify-self-end">
            <div className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--card)] p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">Join the early access</h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Be first to try Roomies at your campus. We prioritize .edu emails for verification.</p>
              <form method="POST" action="/api/waitlist" className="mt-5 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">Full name</label>
                  <input id="name" name="name" required placeholder="Ada Lovelace" className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">School email (.edu preferred)</label>
                  <div className="relative">
                    <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
                    <input id="email" type="email" name="email" required placeholder="you@school.edu" className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-9 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="university" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">University</label>
                  <input id="university" name="university" placeholder="California State University, Sacramento" className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="classyear" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">Class year</label>
                    <select id="classyear" name="classyear" className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]">
                      {Array.from({ length: 8 }, (_, i) => 2025 + i).map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="role" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">I’m</label>
                    <select id="role" name="role" className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]">
                      <option>Looking for a room</option>
                      <option>Offering a room/lease</option>
                      <option>Either / just exploring</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="usecase" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">What do you need most? (optional)</label>
                  <input id="usecase" name="usecase" placeholder="2 roommates near campus, quiet, budget $900…" className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--brand)] px-4 py-2 text-[color:var(--bg)] transition hover:opacity-95">
                  Join the waitlist
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                <p className="text-xs text-[color:var(--muted)]">No spam. By joining you agree to our <a href="#" className="underline underline-offset-2">Community Guidelines</a> and <a href="#" className="underline underline-offset-2">Privacy</a>.</p>
              </form>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", title: "Verify student status", desc: "Sign up with your .edu email; add optional ID for a verified badge." },
              { n: "02", title: "Share your preferences", desc: "Budget, lifestyle, commute, study habits, and housing needs." },
              { n: "03", title: "Match with students", desc: "We highlight compatible profiles in your campus network first." },
              { n: "04", title: "Connect safely", desc: "In‑app chat with report/block, and tips for safe tours & leasing." },
            ].map((f) => (
              <div key={f.n} className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--card)] p-5">
                <span className="text-xs text-[color:var(--muted)]">{f.n}</span>
                <h3 className="mt-1 text-lg font-semibold text-[color:var(--brand-ink)]">{f.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety & Verification */}
        <section id="safety" className="mt-16">
          <div className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--card)] p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">Safety & verification built‑in</h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">We verify enrollment with .edu domains, offer optional ID verification, and give you transparent safety tools so you can focus on finding the right fit.</p>
                <ul className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  {[".edu domain verification", "Optional government ID badge", "Profile completeness score", "Report, block, and rate encounters", "Privacy controls for contact info", "Moderation and fraud screening"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[color:var(--brand-ink)]/90">
                      <svg className="mt-[2px] h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid w-full max-w-sm gap-3 self-start">
                <div className="rounded-xl border border-[color:var(--ring)] bg-[color:var(--bg)] p-4">
                  <p className="text-sm font-medium text-[color:var(--brand-ink)]">Verified badge</p>
                  <p className="mt-1 text-xs text-[color:var(--muted)]">Profiles with .edu + ID show a badge to increase trust when you message or list housing.</p>
                </div>
                <div className="rounded-xl border border-[color:var(--ring)] bg-[color:var(--bg)] p-4">
                  <p className="text-sm font-medium text-[color:var(--brand-ink)]">Campus‑only networks</p>
                  <p className="mt-1 text-xs text-[color:var(--muted)]">See students from your school first, then nearby schools if you opt‑in.</p>
                </div>
                <div className="rounded-xl border border-[color:var(--ring)] bg-[color:var(--bg)] p-4">
                  <p className="text-sm font-medium text-[color:var(--brand-ink)]">Safety tips</p>
                  <p className="mt-1 text-xs text-[color:var(--muted)]">Guides for safe touring, deposits, leases, and roommate agreements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16">
          <div className="grid gap-3">
            {[
              { q: "Do I need a .edu email?", a: "We prioritize .edu emails for verification and access to campus networks. Other emails can join the waitlist and may be asked to verify another way." },
              { q: "Is ID verification required?", a: "No. It’s optional, but it unlocks a verified badge for added trust." },
              { q: "Will my contact info be public?", a: "No. Share only what you choose. Messaging and requests happen inside the platform." },
            ].map((f, i) => (
              <details key={i} className="group rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] p-4">
                <summary className="cursor-pointer select-none text-sm font-medium text-[color:var(--brand-ink)]">{f.q}</summary>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[color:var(--ring)]/80 bg-[color:var(--bg)]/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <p className="text-xs text-[color:var(--muted)]">© {new Date().getFullYear()} Roomies. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="#">Community Guidelines</a>
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}