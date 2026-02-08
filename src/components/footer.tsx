import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight text-slate-300">
            Enclara
          </span>
          <span className="text-xs text-slate-500">
            Privacy-preserving medical AI
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/technology"
            className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
          >
            Technology
          </Link>
          <Link
            href="/about"
            className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
          >
            About
          </Link>
          <Link
            href="https://github.com/makingthingseu/enclara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
          >
            GitHub
          </Link>
        </div>

        <p className="text-xs text-slate-600">
          Built with Concrete-ML and OpenFHE
        </p>
      </div>
    </footer>
  );
}
