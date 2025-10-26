type Props = { action?: string };

export default function WaitlistCard({ action = "/api/waitlist" }: Props) {
  return (
    <div className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--card)] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">Join the early access</h2>
      <p className="mt-2 text-sm text-[color:var(--muted)]">Be first to try Roomies at your campus. We prioritize .edu emails for verification.</p>

      <form method="POST" action={action} className="mt-5 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">Full Name</label>
          <input id="name" name="name" required placeholder="Ada Lovelace"
            className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">School Email (.edu ONLY)</label>
          <div className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
            <input id="email" type="email" name="email" required placeholder="you@school.edu"
              className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-9 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
          </div>
        </div>

        <div>
          <label htmlFor="university" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">University</label>
          <input id="university" name="university" placeholder="California State University, Sacramento"
            className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="classyear" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">Class Year</label>
            <select id="classyear" name="classyear"
              className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]">
              {Array.from({ length: 8 }, (_, i) => 2025 + i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="role" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">I’m</label>
            <select id="role" name="role"
              className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]">
              <option>Looking for a room</option>
              <option>Offering a room/lease</option>
              <option>Either / just exploring</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="usecase" className="mb-1 block text-sm font-medium text-[color:var(--brand-ink)]">What do you need most? (optional)</label>
          <input id="usecase" name="usecase" placeholder="2 roommates near campus, quiet, budget $900…"
            className="block w-full rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--fg)] shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </div>

        <button type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--brand)] px-4 py-2 text-[color:var(--bg)] transition hover:opacity-95">
          Join the waitlist
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
        <p className="text-xs text-[color:var(--muted)]">
          No spam. By joining you agree to our <a href="#" className="underline underline-offset-2">Community Guidelines</a> and <a href="#" className="underline underline-offset-2">Privacy</a>.
        </p>
      </form>
    </div>
  );
}
