import { getSongList } from "@/components/MusicPlayer/data";
import { LegacyRef, useRef, useState } from "react";

const useMusic = () => {
  const songs = getSongList();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTrackSkipped = (direction: number) => {
    let nextIdx = currentIndex + direction;

    if (nextIdx < 0) {
      nextIdx = songs.length - 1;
    } else if (nextIdx >= songs.length) {
      nextIdx = 0;
    }

    setCurrentSong(songs[nextIdx]);
    setCurrentIndex(nextIdx);
  };

  const handlePlaySong = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const handlePauseSong = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return {
    currentIndex,
    currentSong,
    handleTrackSkipped,
    isPlaying,
    handlePlaySong,
    handlePauseSong,
    audioRef,
  };
};

export default useMusic;
