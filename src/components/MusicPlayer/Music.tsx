import { useEffect, useState } from "react";
import Player from "./PlayerControls";
import Section from "../Section";

import "./styles/app.scss";
import { SongData } from "./data";
import AlbumArt from "./AlbumArt";
import Heading from "../Heading";

const Music = ({
  currentIndex,
  handleTrackSkipped,
  currentSong,
  isPlaying,
  audioRef,
  handlePlaySong,
  handlePauseSong,
}: {
  currentIndex: number;
  handleTrackSkipped: (index: number) => void;
  currentSong: SongData;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  handlePlaySong: () => void;
  handlePauseSong: () => void;
}) => {
  const [bgColor, setBgColor] = useState("gradient-1");
  const [sliderColor, setSliderColor] = useState("gradient-2");

  useEffect(() => {
    const numGradients = 4;
    const bgIdx = (currentIndex % numGradients) + 1;
    let nextId = bgIdx + 1;
    if (nextId > numGradients) {
      nextId = 1;
    }
    setBgColor(`gradient-${bgIdx}`);
    setSliderColor(`gradient-${nextId}`);
  }, [currentIndex]);

  return (
    <Section
      className="pt-[7rem] -mt-[7.55rem] -md:mt-[2rem] md:pt-[7rem] lg:pt-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="music"
    >
      {/* <Heading
        className={"text-center "}
        title="Now For Some Theme Music"
        text="A crime fighter needs a theme song. Here's some of mine."
      /> */}
      <div
        className={`bg-gradient-to-r ${bgColor} player-bg md:ml-10 md:mr-10 lg:pt-5 lg:pb-3`}
      >
        {/* <div className="App"> */}
        {/* <Nav onLibraryClicked={handleLibraryClicked} /> */}
        <AlbumArt currentSong={currentSong} isPlaying={isPlaying} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          onTrackSkipped={handleTrackSkipped}
          sliderColor={sliderColor}
          audioRef={audioRef}
          handlePlaySong={handlePlaySong}
          handlePauseSong={handlePauseSong}
        />
        {/* </div> */}
      </div>
    </Section>
  );
};

export default Music;
