export default function Campuses() {
  const schools = ["CSUS", "UCD", "SJSU", "UCLA", "UCSD"];
  return (
    <div className="mt-8">
      <p className="text-xs uppercase tracking-wide text-[color:var(--muted)]">Growing across campuses</p>
      <div className="mt-3 grid grid-cols-3 gap-4 opacity-80 sm:grid-cols-6">
        {schools.map((l) => (
          <div key={l} className="flex h-10 items-center justify-center rounded-md border border-[color:var(--ring)] bg-[color:var(--card)] text-[11px] font-medium">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
