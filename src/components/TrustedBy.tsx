export default function TrustedBy() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <p className="text-center text-sm font-medium text-gray-500">Trusted by:</p>
        <div className="mt-6 grid grid-cols-3 gap-6 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center rounded-lg bg-slate-50 p-4 text-sm text-gray-500">
              Logoipsum
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
