import Link from "next/link";

const items = [
  { href: "#benefits", label: "Benefits" },
  { href: "#specs", label: "Specifications" },
  { href: "#how", label: "How-to" },
  { href: "#contact", label: "Contact Us" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">Roomies</Link>
        <nav className="hidden gap-6 md:flex">
          {items.map(i => (
            <a key={i.href} href={i.href} className="text-sm text-gray-600 hover:text-gray-900">
              {i.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white">Learn More</a>
      </div>
    </header>
  );
}
