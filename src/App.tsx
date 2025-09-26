import React from 'react';
import { Navigation } from './components/Navigation';
import { FloatingHearts } from './components/FloatingHearts';
import { ParticleSystem } from './components/ParticleSystem';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorTrail } from './components/CursorTrail';
import { LoveLetter } from './components/LoveLetter';
import { MagicButton } from './components/MagicButton';
import { HeroSection } from './components/HeroSection';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { PersonalityShowcase } from './components/PersonalityShowcase';
import { FutureVision } from './components/FutureVision';
import { BirthdayCountdown } from './components/BirthdayCountdown';
import { InteractivePhotoGallery } from './components/InteractivePhotoGallery';
import { LoveQuotes } from './components/LoveQuotes';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-purple-50">
      <ScrollProgress />
      <Navigation />
      <FloatingHearts />
      <ParticleSystem />
      <CursorTrail />
      <LoveLetter />
      <MagicButton />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="timeline">
        <InteractiveTimeline />
      </div>
      <div id="photos">
        <InteractivePhotoGallery />
      </div>
      {/* <div id="memories">
        <MemoryWall />
      </div> */}
      <div id="quotes">
        <LoveQuotes />
      </div>
      <div id="personality">
        <PersonalityShowcase />
      </div>
      <div id="future">
        <FutureVision />
      </div>
      <Footer />
    </div>
  );
}

export default App;
