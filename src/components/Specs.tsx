export default function Specs() {
  const rows = [
    { feature: "Verified school emails", roomies: "Yes", altA: "Limited", altB: "No" },
    { feature: "Preference matching",     roomies: "Yes", altA: "Basic",   altB: "No" },
    { feature: "Secure messaging",        roomies: "Yes", altA: "Yes",     altB: "No" },
    { feature: "Neighborhood insights",   roomies: "Yes", altA: "No",      altB: "Partial" },
    { feature: "Scam resistance",         roomies: "High",altA: "Medium",  altB: "Low" },
  ];

  return (
    <section id="specs" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why choose Roomies?</h2>
        <p className="mt-3 max-w-2xl text-gray-600">A student-friendly approach that streamlines the roommate hunt.</p>

        <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-black/5">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-slate-50 text-left text-gray-600">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Roomies</th>
                <th className="px-4 py-3">Generic Listings</th>
                <th className="px-4 py-3">Messaging Apps</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-t">
                  <td className="px-4 py-3">{r.feature}</td>
                  <td className="px-4 py-3 font-medium">{r.roomies}</td>
                  <td className="px-4 py-3">{r.altA}</td>
                  <td className="px-4 py-3">{r.altB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
