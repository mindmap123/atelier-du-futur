import Hero from './sections/Hero';
import VideoSection from './sections/VideoSection';
import Modules from './sections/Modules';
import CTA from './sections/CTA';

function App() {
  return (
    <div className="relative">
      <main>
        <Hero />
        <VideoSection />
        <Modules />
        <CTA />
      </main>
    </div>
  );
}

export default App;
