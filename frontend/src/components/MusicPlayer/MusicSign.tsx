import { useEffect } from "react";

interface MusicSignProps {
  isPlaying: boolean;
  play: () => void;
  stop: () => void;
}

const MusicSign: React.FC<MusicSignProps> = ({ isPlaying, play, stop }) => {
  const signClass = isPlaying ? "neon-on" : "neon-off";

  function handleClick() {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  }

  return (
    <div
      className={`hidden relative md:inline-flex items-center justify-stretch ${
        isPlaying ? " pt-3" : ""
      }`}
    >
      <div className="relative flex flex-col items-center"></div>
      <button
        onClick={handleClick}
        className={`relative inline-flex items-center justify-center h-11 font-borel text-2xl ml-5 ${signClass}`}
      >
        <span
          className={`fixed top-5 right-10 pt-3 ${isPlaying ? "text-4xl" : ""}`}
        >
          {isPlaying ? "Playing" : ""}
        </span>
      </button>
    </div>
  );
};

export default MusicSign;
