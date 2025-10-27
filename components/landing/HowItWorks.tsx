export default function HowItWorks({ className = "" }: { className?: string }) {
  const steps = [
    { n: "01", title: "Verify student status", desc: "Sign up with your .edu email; add optional ID for a verified badge." },
    { n: "02", title: "Share your preferences", desc: "Budget, lifestyle, commute, study habits, and housing needs." },
    { n: "03", title: "Match with students", desc: "We highlight compatible profiles in your campus network first." },
    { n: "04", title: "Connect safely", desc: "In-app chat with report/block, and tips for safe tours & leasing." },
  ];
  return (
    <section className={className}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((f) => (
          <div key={f.n} className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--card)] p-5">
            <span className="text-xs text-[color:var(--muted)]">{f.n}</span>
            <h3 className="mt-1 text-lg font-semibold text-[color:var(--brand-ink)]">{f.title}</h3>
            <p className="mt-1 text-sm text-[color:var(--muted)]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
