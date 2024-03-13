import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import ComingSoon from "./components/ComingSoon";
import Music from "./components/MusicPlayer/Music";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import useMusic from "./hooks/useMusic";

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
    <>
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
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
