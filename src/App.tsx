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
