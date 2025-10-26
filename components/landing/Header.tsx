"use client";
import Image from "next/image";

const NAV = [
  { label: "Overview", href: "#about" },
  { label: "Safety", href: "#safety" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg)]/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <div
            className="h-8 w-8 rounded-lg bg-[color:var(--brand)] bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/room-logo.png')" }}
            aria-hidden
          />
          <span className="text-sm font-semibold tracking-wide text-[color:var(--brand-ink)]">Roomies</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
          {NAV.map((n) => (
            <a key={n.href} className="hover:text-[color:var(--brand-ink)]" href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--ring)] bg-[color:var(--card)] px-3 py-2 text-sm font-medium hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
        >
          Join waitlist
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
