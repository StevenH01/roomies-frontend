"use client";
import Link from "next/link";
import { Button } from "@mui/material";

const nav = [
  { href: "#benefits", label: "Benefits" },
  { href: "#how", label: "How it Works" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">Roomies</Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-gray-900">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="text" href="#search">Browse</Button>
          <Button variant="contained" href="#cta">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
