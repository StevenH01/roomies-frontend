// components/header/SiteHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NAV = [
  { label: "Benefits", href: "/#benefits" },
  { label: "Specifications", href: "/#specs" },
  { label: "How-to", href: "/#how-to" },
  { label: "Contact Us", href: "/#contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "border-b border-border/70",
        "bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/80",
        elevated ? "shadow-sm" : ""
      ].join(" ")}
    >
      <div className="mx-auto grid h-14 w-full max-w-7xl grid-cols-3 items-center px-4 lg:h-16 lg:px-6">
        {/* Left: Logo */}
        <div className="justify-self-start">
          <Link
            href="/"
            aria-label="Roomies home"
            className="flex items-center gap-2.5 text-text font-bold tracking-tight whitespace-nowrap"
          >
            <Image
              src="/room-logo.png"
              alt="Roomies logo"
              width={40}               // explicit intrinsic size prevents shift
              height={40}
              priority
              className="block h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            {/* keep line-height tight so baseline doesn't sag next to the icon */}
            <span className="text-xl md:text-2xl leading-none">Roomies</span>
          </Link>
        </div>

        {/* Center: Nav (now truly centered) */}
        <nav className="hidden md:flex justify-self-center items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-text"
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA + Mobile trigger */}
        <div className="justify-self-end flex items-center gap-2">
          <Link
            href="/onboarding/verify"
            className="hidden rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground md:inline-block"
            aria-label="Learn More"
            title="Learn More"
          >
            Learn More
          </Link>

          {/* show only on small screens */}
          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            size="small"
            sx={{ color: "var(--text)", display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
