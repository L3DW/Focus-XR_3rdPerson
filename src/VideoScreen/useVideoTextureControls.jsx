import { useRef, useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";

export const useVideoTextureControls = (videoSrc, options = {}) => {
  const videoElementRef = useRef(null);
  const stopTime = useRef(null);

  // Handles pausing the video when the stop time is reached
  const checkFrame = (_, metadata) => {
    if (stopTime.current && metadata.mediaTime >= stopTime.current) {
      stopTime.current = null;
      videoElementRef.current?.pause();
      console.log("Video paused at stop time");
    }
  };

  // Initialize video texture with options
  const videoTexture = useVideoTexture(videoSrc, {
    ...options,
    start: false,
    muted: false,
    loop: false,
    onVideoFrame: checkFrame,
    crossOrigin: "anonymous",
  });

  // Capture the video element from the texture
  useEffect(() => {
    if (videoTexture?.image) {
      videoElementRef.current = videoTexture.image;
    }
  }, [videoTexture]);

  // Video control methods
  const controls = {
    play: () => videoElementRef.current?.play(),
    pause: () => videoElementRef.current?.pause(),
    toggleMute: () => {
      if (videoElementRef.current) {
        videoElementRef.current.muted = !videoElementRef.current.muted;
      }
    },
    setMute: (mute) => {
      if (videoElementRef.current) {
        videoElementRef.current.muted = mute;
      }
    },
    setVolume: (volume) => {
      if (videoElementRef.current) {
        videoElementRef.current.volume = Math.max(0, Math.min(1, volume)); // Clamp volume between 0 and 1
      }
    },
    playSequence: ({ start, end }) => {
      if (videoElementRef.current) {
        console.log(`Playing sequence from ${start} to ${end}`);
        stopTime.current = end;
        videoElementRef.current.currentTime = start;
        videoElementRef.current.play();
      }
    },
  };

  return {
    videoTexture,
    videoElementRef,
    controls,
  };
};
