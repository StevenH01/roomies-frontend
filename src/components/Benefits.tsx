"use client";
import { CheckCircleOutline } from "@mui/icons-material";

const items = [
  { title: "Smart Matches", desc: "Compatibility scoring on lifestyle, habits, and schedules." },
  { title: "Verified Profiles", desc: "Photo verification and school email checks to reduce fraud." },
  { title: "Neighborhood Insights", desc: "Safety, commute, and median-rent data in context." },
  { title: "Secure Messaging", desc: "Connect without sharing your phone or email first." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why Roomies?</h2>
        <p className="mt-3 max-w-2xl text-gray-600">Clarity without overload—just the signals that matter.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <CheckCircleOutline className="mb-3" />
              <h3 className="font-semibold">{i.title}</h3>
              <p className="mt-2 text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
