import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { SongData } from "./data";
import TimeSlider from "./TimeSlider";

interface Props {
  currentSong: SongData;
  isPlaying: boolean;
  handlePlaySong: () => void;
  handlePauseSong: () => void;
  onTrackSkipped: (direction: number) => void;
  sliderColor: string;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Player = ({
  currentSong,
  isPlaying,
  handlePlaySong,
  handlePauseSong,
  onTrackSkipped,
  sliderColor,
  audioRef,
}: Props) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [song, setSong] = useState<SongData>(currentSong);

  useEffect(() => {
    if (isPlaying && song.id !== currentSong.id) {
      console.log("playing");
      setSong(currentSong);
      audioRef.current?.play();
    }
  }, [isPlaying, currentSong]);

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

  const handleDataLoaded = () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="player">
      <TimeSlider
        audioRef={audioRef}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <div className="flex justify-between items-center p-4 mb-1 w-2/3 md:w-2/5 lg:w-1/5">
        <PlayIcon i={faAngleLeft} f={() => onTrackSkipped(-1)} />
        <PlayIcon
          i={isPlaying ? faPause : faPlay}
          f={() => {
            isPlaying ? handlePauseSong() : handlePlaySong();
          }}
        />
        <PlayIcon i={faAngleRight} f={() => onTrackSkipped(1)} />
      </div>
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          onTrackSkipped(1);
        }}
        onLoadedMetadata={handleTimeUpdate}
        onLoadedData={handleDataLoaded}
      ></audio>
    </div>
  );
};

const PlayIcon = ({ i, f }: { i: IconDefinition; f: () => void }) => {
  return (
    <FontAwesomeIcon
      className="cursor-pointer"
      size="2x"
      icon={i}
      onClick={() => f()}
    />
  );
};

export default Player;
