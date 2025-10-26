import SafetyRibbon from "./SafetyRibbon";
import Campuses from "./Campuses";

export default function Hero() {
  return (
    <div>
      <span className="inline-flex items-center rounded-full border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-1 text-xs font-medium text-[color:var(--brand-ink)]/90">
        New • Student-only beta
      </span>

      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[color:var(--brand-ink)] md:text-6xl">
        Find trusted college roommates.
        <br className="hidden sm:block" />
        Campus-verified. Safety-first.
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
        Roomies is a safe place for students to find compatible roommates and housing near campus. Every profile is verified, communities are school-based, and safety tools come built-in.
      </p>

      <SafetyRibbon />
      <Campuses />
    </div>
  );
}
