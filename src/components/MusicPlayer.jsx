"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.log("Music playback was blocked.");
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/wedding-music.mp3" loop />

      <button
        onClick={toggleMusic}
        className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227] bg-[#FFF8ED]/90 text-[#7A1F2B] shadow-lg backdrop-blur"
        aria-label="Toggle music"
      >
        {playing ? "Ⅱ" : "♪"}
      </button>
    </>
  );
}