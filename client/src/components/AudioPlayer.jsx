import React, { useEffect, useRef } from "react";

export default function AudioPlayer({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (play && audio) {
      audio.volume = 0;
      audio.play().then(() => {
        // Smooth fade in
        let vol = 0;
        const fade = setInterval(() => {
          if (vol < 0.5) {
            vol += 0.05;
            audio.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 200);
      });
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      loop
      src="/audio/Khat.mp3"
      style={{ display: "none" }}
    />
  );
}
