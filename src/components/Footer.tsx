"use client";
export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
          <div>© {new Date().getFullYear()} Roomies. All rights reserved.</div>
          <nav className="flex gap-6">
            <a href="#benefits">Benefits</a>
            <a href="#how">How it Works</a>
            <a href="#cta">Get Started</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
