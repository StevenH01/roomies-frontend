"use client";
export default function BigPicture() {
  const points = [
    "Spot great matches in seconds.",
    "Share shortlists with potential roommates.",
    "Elevate your search with safety + verification.",
    "Your housing snapshot at a glance.",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">See the big picture</h2>
        <p className="mt-3 max-w-2xl text-gray-600">Turn fragmented listings into clear choices.</p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {points.map((p, i) => (
            <li key={i} className="rounded-xl bg-slate-50 p-5 text-sm">
              <div className="text-xs font-semibold text-gray-500">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 font-medium">{p}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
