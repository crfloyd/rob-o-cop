import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, ReactEventHandler, useState } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { SongData } from "./data";

interface Props {
  currentSong: SongData;
  isPlaying: boolean;
  handlePlaySong: () => void;
  onTrackSkipped: (direction: number) => void;
  sliderColor: string;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Player = ({
  currentSong,
  isPlaying,
  handlePlaySong,
  onTrackSkipped,
  sliderColor,
  audioRef,
}: Props) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  const handleTimeUpdate = (
    e: React.SyntheticEvent<HTMLAudioElement, Event>
  ) => {
    const audioElement = e.target as HTMLAudioElement;
    setSongInfo({
      ...songInfo,
      currentTime: Math.floor(audioElement.currentTime),
      duration: Math.floor(audioElement.duration),
    });
  };
  const formatTime = (time: number) => {
    if (!time) return "0:00";
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const handleDrag = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
    setSongInfo({ ...songInfo, currentTime });
  };

  const handleDataLoaded = () => {
    if (isPlaying && audioRef.current) {
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
