import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Lightweight demo map using the Mapbox static image as background (no extra deps)
// Simulates a moving tracker with smooth animations
const MAPBOX_STYLE = 'light-v11';
const CENTER = { lon: 106.8272, lat: -6.1754 }; // Jakarta
const MAP_ZOOM = 11;

function buildStaticMapUrl({ lon, lat }) {
  const base = 'https://api.mapbox.com/styles/v1/mapbox';
  const token = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'; // public demo token
  const width = 1200;
  const height = 700;
  return `${base}/${MAPBOX_STYLE}/static/${lon},${lat},${MAP_ZOOM},0,0/${width}x${height}?access_token=${token}`;
}

export default function DemoMap() {
  const [position, setPosition] = useState({ lon: CENTER.lon, lat: CENTER.lat });
  const [route, setRoute] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Simulate movement by generating small deltas
    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        const dLon = (Math.random() - 0.5) * 0.01;
        const dLat = (Math.random() - 0.5) * 0.01;
        const next = { lon: prev.lon + dLon, lat: prev.lat + dLat };
        setRoute((r) => [...r.slice(-60), next]);
        return next;
      });
    }, 1200);

    return () => clearInterval(intervalRef.current);
  }, []);

  const bgUrl = buildStaticMapUrl({ lon: position.lon, lat: position.lat });

  return (
    <section id="demo" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="flex-1">
            <div className="relative aspect-[12/7] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={bgUrl} alt="Map preview" className="absolute inset-0 h-full w-full object-cover" />

              {route.map((p, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  transition={{ duration: 0.6 }}
                  className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
                  style={{ left: `${50 + (p.lon - position.lon) * 600}%`, top: `${50 - (p.lat - position.lat) * 600}%` }}
                />
              ))}

              <motion.div
                layout
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_rgba(59,130,246,0.8)]"
                style={{ left: '50%', top: '50%' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-black/50 px-3 py-2 text-xs text-white/80 backdrop-blur">
                <div>Lon: {position.lon.toFixed(5)} | Lat: {position.lat.toFixed(5)}</div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[28rem] flex flex-col justify-center">
            <h3 className="text-2xl font-semibold tracking-tight">Demo Interaktif</h3>
            <p className="mt-3 text-white/70">
              Lihat simulasi pelacak bergerak di sekitar peta. Titik putih menunjukkan posisi perangkat saat ini, sedangkan jejak cyan menampilkan rute terakhir.
            </p>
            <ul className="mt-6 space-y-3 text-white/80 text-sm">
              <li>• Pembaruan posisi setiap ~1.2 detik</li>
              <li>• Efek glow halus untuk menonjolkan perangkat</li>
              <li>• Tanpa dependensi peta tambahan — ringan dan cepat</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
