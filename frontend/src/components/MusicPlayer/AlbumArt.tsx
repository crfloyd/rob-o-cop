import { SongData } from "./data";

const AlbumArt = ({
  currentSong,
  isPlaying,
}: {
  currentSong: SongData;
  isPlaying: boolean;
}) => {
  return (
    <div className="song-container ">
      <img
        className={isPlaying ? "rotating" : ""}
        src={currentSong.cover}
        alt={currentSong.name}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default AlbumArt;
