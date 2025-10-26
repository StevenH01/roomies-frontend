import "./globals.css";
import BackgroundOrnaments from "@/components/landing/BackgroundOrnaments";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WaitlistCard from "@/components/landing/WaitlistCard";
import HowItWorks from "@/components/landing/HowItWorks";
import SafetyVerification from "@/components/landing/SafetyVerification";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  // compute once on server; avoids any hydration timing issues
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] relative">
      <BackgroundOrnaments />
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:pt-24">
        {/* Hero: left text, right waitlist */}
        <section id="about" className="grid items-center gap-12 md:grid-cols-2">
          <Hero />
          <div id="waitlist" className="md:justify-self-end">
            <WaitlistCard action="/api/waitlist" />
          </div>
        </section>

        <HowItWorks className="mt-20" />
        <SafetyVerification id="safety" className="mt-16" />
        <FAQ id="faq" className="mt-16" />
      </main>

      <Footer id="contact" year={currentYear} />
    </div>
  );
}
