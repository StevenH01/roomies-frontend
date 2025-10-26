export default function Footer({ id, year }: { id?: string; year: number }) {
  return (
    <footer id={id} className="border-t border-[color:var(--ring)]/80 bg-[color:var(--bg)]/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-xs text-[color:var(--muted)]">© {year} Roomies. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#">Community Guidelines</a>
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
