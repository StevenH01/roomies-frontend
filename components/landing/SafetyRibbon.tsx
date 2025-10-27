export default function SafetyRibbon() {
  const items = [".edu email verification", "Optional ID checks", "Report & block controls"];
  return (
    <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-xs text-[color:var(--brand-ink)]/90">
      {items.map((label) => (
        <span key={label} className="inline-flex items-center gap-1">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
          {label}
        </span>
      ))}
    </div>
  );
}
