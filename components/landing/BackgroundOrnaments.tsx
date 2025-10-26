export default function BackgroundOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(60% 60% at 50% 50%, var(--accent), transparent)" }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, var(--brand), transparent)" }}
      />
    </div>
  );
}
