"use client";
import { Button } from "@mui/material";
import RoommateSearch from "./RoommateSearch";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Find your next roommate <span className="text-[color:var(--color-primary)]">faster</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Verified profiles, preference matching, and secure messaging—tailored for students and young professionals.
          </p>
          <div className="mt-6 flex gap-3">
            <Button variant="contained" href="#search">Start Browsing</Button>
            <Button variant="outlined" href="#benefits">Learn More</Button>
          </div>
        </div>
        <div className="md:pl-8">
          <div id="search" className="md:pt-8">
            <RoommateSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
