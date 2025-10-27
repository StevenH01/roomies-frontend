export default function FAQ({ id, className = "" }: { id?: string; className?: string }) {
  const faqs = [
    { q: "Do I need a .edu email?", a: "We prioritize .edu emails for verification and access to campus networks. Other emails can join the waitlist and may be asked to verify another way." },
    { q: "Is ID verification required?", a: "No. It’s optional, but it unlocks a verified badge for added trust." },
    { q: "Will my contact info be public?", a: "No. Share only what you choose. Messaging and requests happen inside the platform." },
  ];
  return (
    <section id={id} className={className}>
      <div className="grid gap-3">
        {faqs.map((f, i) => (
          <details key={i} className="group rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] p-4">
            <summary className="cursor-pointer select-none text-sm font-medium text-[color:var(--brand-ink)]">{f.q}</summary>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
