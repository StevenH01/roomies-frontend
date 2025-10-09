
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
          <div>© {new Date().getFullYear()} Roomies. All Rights Reserved</div>
          <nav className="flex gap-6">
            <a href="#benefits">Benefits</a>
            <a href="#specs">Specifications</a>
            <a href="#how">How-to</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
