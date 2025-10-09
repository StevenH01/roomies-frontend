export default function Steps() {
  const steps = [
    { title: "Get Started", desc: "Create your profile and set your budget & timeline." },
    { title: "Customize",   desc: "Choose preferences (quiet hours, pets, cleanliness, etc.)." },
    { title: "Match & Chat",desc: "Browse compatible profiles and message safely in-app." },
  ];
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-slate-50 p-6">
              <div className="text-xs font-semibold text-gray-500">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <p className="mt-1 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
