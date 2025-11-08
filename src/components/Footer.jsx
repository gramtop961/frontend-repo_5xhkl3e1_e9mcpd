export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white/70 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} PulseTrack. All rights reserved.</p>
          <div className="text-sm">
            <a href="mailto:hello@pulsetrack.app" className="hover:text-white transition">hello@pulsetrack.app</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
