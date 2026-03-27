import Hero from './sections/Hero';
import VideoSection from './sections/VideoSection';
import Problem from './sections/Problem';
import Offer from './sections/Offer';
import Modules from './sections/Modules';
import Skool from './sections/Skool';
import Guarantee from './sections/Guarantee';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

function App() {
  return (
    <div className="relative">
      <main>
        <Hero />
        {/* Transition Hero → VideoSection */}
        <div style={{ lineHeight: 0, margin: 0, padding: 0, position: 'relative', zIndex: 0 }}>
          <svg viewBox="0 0 1440 30" preserveAspectRatio="none" style={{ width: '100%', height: '30px', display: 'block' }}>
            <path d="M0,0 C240,30 480,0 720,20 C960,35 1200,10 1440,0 L1440,30 L0,30 Z" fill="#252422"/>
            <path d="M0,0 C240,30 480,0 720,20 C960,35 1200,10 1440,0" fill="none" stroke="#E8520A" strokeWidth="3"/>
          </svg>
          <div style={{ height: '6px', background: '#E8520A', margin: 0, padding: 0 }} />
        </div>
        <VideoSection />
        <Problem />
        <Offer />
        <Modules />
        <Skool />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}

export default App;
