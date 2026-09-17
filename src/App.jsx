import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import IntroSection from './components/sections/IntroSection';
import SolutionSection from './components/sections/SolutionSection';
import FeaturesSection from './components/sections/FeaturesSection';
import VideoAnalysisSection from './components/sections/VideoAnalysisSection';
import RegisterSection from './components/sections/RegisterSection';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <SolutionSection />
        <FeaturesSection />
        <VideoAnalysisSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
