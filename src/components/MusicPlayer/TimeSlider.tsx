import React, { ChangeEvent } from "react";
import { SongData } from "./data";

const DEFAULT_TIME = "0:00";

interface Props {
  audioRef: React.RefObject<HTMLAudioElement>;
  currentSong: SongData;
  songInfo: {
    currentTime: number;
    duration: number;
  };
  setSongInfo: (songInfo: { currentTime: number; duration: number }) => void;
}

const formatTime = (time: number) => {
  if (!time) return DEFAULT_TIME;
  const minutes = Math.floor(time / 60);
  const seconds = ("0" + Math.floor(time % 60)).slice(-2);
  return `${minutes}:${seconds}`;
};

const TimeSlider = ({
  currentSong,
  songInfo,
  audioRef,
  setSongInfo,
}: Props) => {
  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  const handleDrag = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
    setSongInfo({ ...songInfo, currentTime });
  };

  return (
    <div className="time-control">
      <p>{formatTime(songInfo.currentTime || 0)}</p>
      <div
        className="track"
        style={{
          background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
        }}
      >
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
  );
};

export default TimeSlider;
