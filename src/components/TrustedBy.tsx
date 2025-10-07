"use client";
export default function TrustedBy() {
  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="text-center text-sm font-medium text-gray-500">Trusted by:</p>
        <div className="mt-6 grid grid-cols-3 gap-6 md:grid-cols-6">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center rounded-lg bg-slate-50 p-4 text-sm text-gray-500">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
