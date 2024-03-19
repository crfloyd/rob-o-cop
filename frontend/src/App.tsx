import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import ComingSoon from "./components/ComingSoon";
import Music from "./components/MusicPlayer/Music";
import Footer from "./components/Footer";
import Integrations from "./components/Integrations";
import useMusic from "./hooks/useMusic";
import Contact from "./components/Contact";
import { ThemeProvider } from "@/components/ThemeProvider";

const App = () => {
  const {
    currentIndex,
    currentSong,
    handleTrackSkipped,
    isPlaying,
    handlePlaySong,
    handlePauseSong,
    audioRef,
  } = useMusic();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header
          handlePlaySong={handlePlaySong}
          handlePauseSong={handlePauseSong}
          isPlaying={isPlaying}
        />
        <Hero />
        <Features />
        <Services />
        <ComingSoon />
        <Music
          currentIndex={currentIndex}
          currentSong={currentSong}
          handleTrackSkipped={handleTrackSkipped}
          isPlaying={isPlaying}
          audioRef={audioRef}
          handlePlaySong={handlePlaySong}
          handlePauseSong={handlePauseSong}
        />
        <Integrations />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </ThemeProvider>
  );
};

export default App;
