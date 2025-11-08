import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoMap from './components/DemoMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
