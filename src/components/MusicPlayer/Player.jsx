import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  onTrackSkipped,
  sliderColor,
}) => {
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  const handlePlaySong = (e) => {
    e.preventDefault();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    setSongInfo({
      ...songInfo,
      currentTime: Math.floor(e.target.currentTime),
      duration: Math.floor(e.target.duration),
    });
  };
  const formatTime = (time) => {
    if (!time) return "0:00";
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const handleDrag = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const handleDataLoaded = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime || 0)}</p>
        <div className={`track bg-gradient-to-r ${sliderColor}`}>
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime || 0}
            onChange={handleDrag}
            type="range"
          />
          <div
            className="animate-track"
            style={{
              transform: `translateX(${animationPercentage}%)`,
            }}
          ></div>
        </div>
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => onTrackSkipped(-1)}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={handlePlaySong}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => {
            onTrackSkipped(1);
          }}
        />
      </div>
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => onTrackSkipped(1)}
        onLoadedMetadata={handleTimeUpdate}
        onLoadedData={handleDataLoaded}
      ></audio>
    </div>
  );
};

export default Player;
