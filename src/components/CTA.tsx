"use client";
import { Button } from "@mui/material";

export default function CTA() {
  return (
    <section id="cta" className="bg-[color:var(--color-primary)]">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Match with a great roommate</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">Join Roomies and start browsing verified profiles today.</p>
        <div className="mt-6">
          <Button variant="contained" color="inherit" sx={{ color: "black" }} href="#search">
            Start Browsing
          </Button>
        </div>
      </div>
    </section>
  );
}
