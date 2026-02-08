import React, { useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  const handlePlayAudio = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        await audioRef.current.play();
      }
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handlePlayAudio}
        className="bg-lavender text-white px-4 py-2 rounded-md hover:bg-lavender/90"
      >
        Play Music
      </button>
      <audio
        ref={audioRef}
        loop
        src="https://www.bensound.com/bensound-music/bensound-romantic.mp3"
        style={{ display: 'none' }}
      />
    </div>
  );
}