import { useEffect, useState } from "react";
import getSongList from "./data";
import Song from "./Song";
import Player from "./Player";
import Section from "../Section";
import Nav from "./Nav";
import Library from "./Library";

import "./styles/app.scss";

const Music = () => {
  const [songs, setSongs] = useState(getSongList());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgColor, setBgColor] = useState("gradient-1");
  const [sliderColor, setSliderColor] = useState("gradient-2");
  // const [showLibrary, setShowLibrary] = useState(false);

  // const handleSongSelected = (song) => {
  //   setSongs(
  //     songs.map((s) => {
  //       return { ...s, active: s.id === song.id };
  //     })
  //   );
  //   setCurrentSong(song);
  // };

  // const handleLibraryClicked = () => {
  //   setShowLibrary(!showLibrary);
  //   console.log("library clicked", showLibrary);
  // };

  const handleTrackSkipped = (dir) => {
    const currIdx = currentIndex;
    let nextIdx = currIdx + dir;

    if (nextIdx < 0) {
      nextIdx = songs.length - 1;
    } else if (nextIdx >= songs.length) {
      nextIdx = 0;
    }

    setCurrentIndex(nextIdx);
    setCurrentSong(songs[nextIdx]);

    // const currIndex = songs.findIndex((s) => s.id === currentSong.id);
    // let nextIndex = currIndex;

    // if (dir > 0 && currIndex === songs.length - 1) {
    //   nextIndex = 0;
    // } else if (dir < 0 && currIndex == 0) {
    //   nextIndex = songs.length - 1;
    // } else {
    //   nextIndex += 1;
    // }
    // handleSongSelected(songs[nextIndex]);
  };

  useEffect(() => {
    // setBgColor(
    //   `bg-gradient-to-r from-${currentSong.color[0]} via-${currentSong.color[1]} to-${currentSong.color[2]}`
    // );
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
      <div
        className={`bg-gradient-to-r ${bgColor} player-bg md:ml-10 md:mr-10`}
      >
        <div className="App">
          {/* <Nav onLibraryClicked={handleLibraryClicked} /> */}
          <Song currentSong={currentSong} isPlaying={isPlaying} />
          <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            onTrackSkipped={handleTrackSkipped}
            sliderColor={sliderColor}
          />
          {/* <Library
            showLibrary={showLibrary}
            songs={songs}
            currentSong={currentSong}
            handleSongSelected={handleSongSelected}
          /> */}
        </div>
      </div>
    </Section>
  );
};

export default Music;
