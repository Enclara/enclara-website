"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Diamond className="h-7 w-7" />
          <span className="text-lg font-semibold tracking-tight">Enclara</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://github.com/makingthingseu/enclara"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/20"
          >
            View Source
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-slate-400 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="https://github.com/makingthingseu/enclara"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-center text-sm font-medium text-cyan-400"
              >
                View Source
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Diamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <rect
        x="16"
        y="2"
        width="18"
        height="18"
        rx="2"
        transform="rotate(45 16 2)"
        stroke="url(#nav-grad)"
        strokeWidth="2.5"
        fill="none"
      />
      <rect
        x="16"
        y="6"
        width="12"
        height="12"
        rx="1"
        transform="rotate(45 16 6)"
        fill="url(#nav-grad)"
        opacity="0.2"
      />
      <defs>
        <linearGradient id="nav-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
