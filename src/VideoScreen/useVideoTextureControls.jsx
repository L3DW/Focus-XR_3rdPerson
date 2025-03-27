import { useRef, useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";

export const useVideoTextureControls = (videoSrc, options = {}) => {
  const videoElementRef = useRef(null);
  const stopTime = useRef(null);

  const checkFrame = (now, metadata) => {
    if (!stopTime.current) return;
    if (metadata.mediaTime >= stopTime.current) {
      stopTime.current = null;
      videoElementRef.current.pause();
      console.log("pause");
    }
  };

  const videoTexture = useVideoTexture(videoSrc, {
    ...options,
    start: false,
    muted: false,
    loop: false,
    onVideoFrame: checkFrame,
    crossOrigin: "anonymous",
  });

  // Explicitly capture the video element
  useEffect(() => {
    if (videoTexture && videoTexture.image) {
      videoElementRef.current = videoTexture.image;
    }
  }, [videoTexture]);

  // Video control methods
  const controls = {
    play: () => {
      if (!videoElementRef.current) return;
      stopTime.current = null;
      videoElementRef.current.play();
    },

    pause: () => {
      if (!videoElementRef.current) return;
      videoElementRef.current.pause();
    },

    toggleMute: () => {
      if (!videoElementRef.current) return;
      videoElementRef.current.muted = !videoElementRef.current.muted;
    },

    setMute: (mute) => {
      if (!videoElementRef.current) return;
      videoElementRef.current.muted = mute;
    },

    setVolume: (newVolume) => {
      if (!videoElementRef.current) return;
      // Ensure volume is between 0 and 1
      const clampedVolume = Math.max(0, Math.min(1, newVolume));
      videoElementRef.current.volume = clampedVolume;
    },

    playSequence: ({ start, end }) => {
      // Define the handler before using it
      if (!videoElementRef.current) return;
      console.log({ start, end });
      stopTime.current = end;
      // Set current time to start of sequence
      videoElementRef.current.currentTime = start;
      videoElementRef.current.play();
    },
  };

  return {
    videoTexture,
    videoElementRef,
    controls,
  };
};
