import { useState } from "react";
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";
import Nav from "./Nav";
import chillHop from "./data";

const LibraryWindow = () => {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);

  const handleSongSelected = (song) => {
    setSongs(
      songs.map((s) => {
        return { ...s, active: s.id === song.id };
      })
    );
    setCurrentSong(song);
  };

  const handleLibraryClicked = () => {
    setShowLibrary(!showLibrary);
    console.log("library clicked", showLibrary);
  };

  const handleTrackSkipped = (dir) => {
    const currIndex = songs.findIndex((s) => s.id === currentSong.id);
    let nextIndex = currIndex;

    if (dir > 0 && currIndex === songs.length - 1) {
      nextIndex = 0;
    } else if (dir < 0 && currIndex == 0) {
      nextIndex = songs.length - 1;
    } else {
      nextIndex += 1;
    }
    handleSongSelected(songs[nextIndex]);
  };

  return (
    <div className="App">
      <Nav onLibraryClicked={handleLibraryClicked} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onTrackSkipped={handleTrackSkipped}
      />
      <Library
        showLibrary={showLibrary}
        songs={songs}
        currentSong={currentSong}
        handleSongSelected={handleSongSelected}
      />
    </div>
  );
};

export default LibraryWindow;
