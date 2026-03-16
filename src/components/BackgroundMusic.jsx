import { useEffect, useRef } from "react";

export default function BackgroundMusic({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
  }, []);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play().catch(err => {
        console.warn("Audio play failed, awaiting interaction:", err);
      });
    } else if (!play && audioRef.current) {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src="/BenTenisionMp3.mp3"
      loop
      preload="auto"
      className="hidden"
    />
  );
}
