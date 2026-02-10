import React, { useEffect, useRef } from "react";

export default function AudioPlayer({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      // Always start playing muted
      audio.muted = true;
      audio.volume = 0;
      audio.play().catch(() => { });
    }

    if (play && audio) {
      // Unmute and fade in after interaction
      audio.muted = false;

      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.5) {
          vol += 0.05;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      loop
      src="/audio/Khat.mp3"
      autoPlay
      style={{ display: "none" }}
    />
  );
}
