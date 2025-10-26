export default function SafetyVerification({ id, className = "" }: { id?: string; className?: string }) {
  const features = [
    ".edu domain verification",
    "Optional government ID badge",
    "Profile completeness score",
    "Report, block, and rate encounters",
    "Privacy controls for contact info",
    "Moderation and fraud screening",
  ];

  return (
    <section id={id} className={className}>
      <div className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--card)] p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-[color:var(--brand-ink)]">Safety & verification built-in</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              We verify enrollment with .edu domains, offer optional ID verification, and give you transparent safety tools so you can focus on finding the right fit.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[color:var(--brand-ink)]/90">
                  <svg className="mt-[2px] h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                       strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full max-w-sm gap-3 self-start">
            {[
              { t: "Verified badge", d: "Profiles with .edu + ID show a badge to increase trust when you message or list housing." },
              { t: "Campus-only networks", d: "See students from your school first, then nearby schools if you opt-in." },
              { t: "Safety tips", d: "Guides for safe touring, deposits, leases, and roommate agreements." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-[color:var(--ring)] bg-[color:var(--bg)] p-4">
                <p className="text-sm font-medium text-[color:var(--brand-ink)]">{c.t}</p>
                <p className="mt-1 text-xs text-[color:var(--muted)]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
