"use client";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <Typography variant="h2" component="h1" className="!text-4xl md:!text-6xl !font-bold !leading-tight">
            Browse roommates <span className="text-[var(--color-primary)]">by campus, budget & vibe.</span>
          </Typography>
          <p className="mt-4 text-lg text-gray-600">
            Verified profiles and preference matching make finding a great roommate simple.
          </p>
          <div className="mt-6 flex gap-3">
            <Button variant="contained" href="#cta" size="large">Get Started</Button>
            <Button variant="outlined" href="#benefits" size="large">Learn More</Button>
          </div>
        </div>
        =
      </div>
    </section>
  );
}
