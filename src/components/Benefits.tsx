export default function Benefits() {
  const items = [
    { title: "Smart Matches", desc: "Compatibility scoring on lifestyle, schedules, noise, pets, and more." },
    { title: "Verified Profiles", desc: "School email + photo verification cut spam and scams." },
    { title: "Neighborhood Insights", desc: "Commute, safety and rent snapshots to compare areas fast." },
    { title: "Secure Messaging", desc: "Chat safely without sharing phone/email first." },
  ];

  return (
    <section id="benefits" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">We’ve cracked the roommate search.</h2>
        <p className="mt-3 max-w-2xl text-gray-600">Roomies shows only the signals that matter—so you decide faster.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="text-lg font-semibold">{i.title}</div>
              <p className="mt-2 text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
