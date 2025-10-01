"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconButton, Drawer } from "@mui/material";
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

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center px-4 lg:h-16 lg:px-6">
        {/* Left: Logo */}
        <Link href="/" className="shrink-0 text-base font-bold tracking-tight text-text">
          CampusStay
        </Link>

        {/* Center: Nav (desktop only) */}
        <nav className="mx-auto hidden items-center gap-6 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "text-sm transition-colors",
                  active ? "text-text" : "text-muted hover:text-text",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA + Mobile menu */}
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/onboarding/verify"
            className="hidden rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground md:inline-block"
            aria-label="Learn More"
            title="Learn More"
          >
            Learn More
          </Link>

          <IconButton
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            size="small"
            sx={{
              color: "var(--text)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-72 bg-surface p-4">
          <div className="mb-4 text-base font-semibold">Menu</div>
          <nav className="flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-text hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Link
            href="/onboarding/verify"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
          >
            Learn More
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
