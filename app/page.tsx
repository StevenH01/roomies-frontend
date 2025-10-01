export default function HomePage() {
  return (
    <div className="py-10 space-y-24">
      <section id="benefits" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold">Benefits</h2>
        <p className="mt-2 text-muted">Students-only network, verified .edu, safer chats, and curated roommate matches.</p>
      </section>

      <section id="specs" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold">Specifications</h2>
        <p className="mt-2 text-muted">Listings + map, roommate directory, school badges, report/block, and more.</p>
      </section>

      <section id="how-to" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold">How-to</h2>
        <p className="mt-2 text-muted">1) Verify .edu → 2) Set preferences → 3) Browse and message → 4) Schedule a tour.</p>
      </section>

      <section id="contact" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-muted">Questions? Reach us at team@campusstay.app</p>
      </section>
    </div>
  );
}
