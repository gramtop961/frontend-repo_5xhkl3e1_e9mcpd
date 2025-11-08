import { MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
              <MapPin size={18} />
            </span>
            <span className="font-semibold tracking-tight">PulseTrack</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Live Demo</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-white/90 transition">
              Get Started
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-white/90" aria-label="Open menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
