import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Real-time GPS Tracker
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Lacak aset dan armada Anda dengan visual yang halus dan interaktif
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Platform pelacakan modern dengan peta real‑time, geofencing, dan analitik. Dirancang dengan animasi yang mulus untuk pengalaman yang menyenangkan.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow-sm hover:bg-white/90 transition">
              Coba Demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              Lihat Fitur
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
