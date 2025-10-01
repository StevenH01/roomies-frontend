// app/page.tsx
import Image from "next/image";
export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24">
      {/* headline */}
      <section className="mx-auto max-w-7xl px-4 lg:px-6 pt-8 lg:pt-8 text-center">
        <h1 className="text-[clamp(40px, 7vw, 120px)] leading-[0.95] font-semibold tracking-tight">
          Find Your New Rommie
        </h1>
      </section>

      {/* Background block */}
      <div className="pointer-events-none absolute left-0 right-0 top-[38vh] -z-10 flex justify-between">
        <div className="h-[220px] w-[42%] rounded-[28px] bg-accent" />
        <div className="h-[220px] w-[42%] rounded-[28px] bg-accent" />
      </div>

      {/* hero */}
      <section className="mx-auto mt-10 max-w-5xl px-4 lg:px-6">
        <div className="rounded-[22px] bg-surface shadow-card ring-1 ring-border/60 overflow-hidden">
          {/* imgage placeholder */}
          <Image src="/placeholder.jpg" alt="Roomies preview" fill className="object-cover" />
        </div>
        <div className="flex items-center justify-between px-4 py-3 text-sm text-muted">
            <span>Students-only • Verified .edu • Safer chats</span>
            <a href="/onboarding/verify"
              className="rounded-full bg-primary px-3 text-primary-forground"
            >
              Get Started
            </a>
        </div>
      </section>
    </div>
  );
}
