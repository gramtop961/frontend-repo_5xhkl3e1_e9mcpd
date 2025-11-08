import { Satellite, Shield, Zap, Route } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Satellite,
    title: 'Real-time Tracking',
    desc: 'Pantau pergerakan armada dan aset secara instan dengan pembaruan cepat dan akurat.'
  },
  {
    icon: Route,
    title: 'Geofencing & Rute',
    desc: 'Buat zona aman dan rute optimal, dapatkan alert saat terjadi penyimpangan.'
  },
  {
    icon: Shield,
    title: 'Keamanan Data',
    desc: 'Enkripsi end‑to‑end, kontrol akses berbasis peran, dan audit log bawaan.'
  },
  {
    icon: Zap,
    title: 'Hemat Daya',
    desc: 'Algoritma cerdas untuk menghemat baterai perangkat tanpa mengorbankan akurasi.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Fitur Unggulan</h2>
          <p className="mt-2 text-white/70 max-w-2xl mx-auto">Semua yang Anda butuhkan untuk pelacakan yang aman, andal, dan menyenangkan untuk digunakan.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
                {<f.icon size={18} />}
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
