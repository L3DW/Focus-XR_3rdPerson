import React, {
  forwardRef,
  useMemo,
  useCallback,
  memo,
  useImperativeHandle,
  useState,
} from "react";
import { Box, Text } from "@react-three/drei";

import { useClips } from "./useClips";
import { useSubtitles } from "./useSubtitles";
import { useVideoTextureControls } from "./useVideoTextureControls";

// Memoize the control buttons to prevent unnecessary re-renders
const ControlButton = memo(({ onClick, children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      args={[0.75, 0.2, 0.1]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }} // Set hover state to true
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }} // Reset hover state
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      {...props}
    >
      <meshStandardMaterial
        color={isHovered ? "lightblue" : "white"} // Change color on hover
      />
      <Text color="black" fontSize={0.1} position={[0, 0, 0.055]}>
        {children}
      </Text>
    </Box>
  );
});

const VideoScreen = forwardRef(
  (
    {
      videoSrc = "/video.webm",
      clipsUrl = "/clips.csv",
      subtitles = "/subtitles.csv",
      ...props
    },
    ref
  ) => {
    // Hooks for clips, video texture, and subtitles
    const { clips } = useClips(clipsUrl);
    const { videoTexture, videoElementRef, controls } =
      useVideoTextureControls(videoSrc);
    const { SubtitleText } = useSubtitles(subtitles, videoElementRef);

    // Memoized Screen component
    const Screen = useMemo(
      () => (
        <mesh scale={0.25}>
          <planeGeometry args={[16, 9]} />
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>
      ),
      [videoTexture]
    );

    // Memoized SubtitleDisplay component
    const SubtitleDisplay = useMemo(
      () => (
        <Box name="Subtitles" args={[4, 0.5, 0.1]} position={[0, -1.5, 0.75]}>
          <SubtitleText
            color="black"
            fontSize={0.1}
            position={[0, 0, 0.055]}
            anchorX="center"
            anchorY="middle"
            textAlign="center"
          />
        </Box>
      ),
      [SubtitleText]
    );

    // Random clip selection
    const getRandomClip = useCallback(() => {
      if (!clips || Object.keys(clips).length === 0) return null;
      const clipKeys = Object.keys(clips);
      const randomKey = clipKeys[Math.floor(Math.random() * clipKeys.length)];
      return clips[randomKey];
    }, [clips]);

    // Control handlers
    const handlePause = useCallback(() => controls.pause(), [controls]);
    const handlePlay = useCallback(() => controls.play(), [controls]);
    const handleRandomClip = useCallback(() => {
      const randomClip = getRandomClip();
      if (randomClip) {
        controls.playSequence({ start: randomClip.start, end: randomClip.end });
      }
    }, [getRandomClip, controls]);

    // Expose methods to parent component
    useImperativeHandle(
      ref,
      () => ({
        play: handlePlay,
        pause: handlePause,
        randomClip: handleRandomClip,
        getCurrentTime: () => videoElementRef.current?.currentTime,
        getDuration: () => videoElementRef.current?.duration,
        isPlaying: () => !videoElementRef.current?.paused,
      }),
      [handlePlay, handlePause, handleRandomClip]
    );

    // Memoized Controls component
    const Controls = useMemo(() => {
      if (!clips) return null;

      const clipButtons = Object.entries(clips).map(
        ([clipName, clipData], index) => {
          const x = (index % 4) * 1 - 1.5; // Horizontal position
          const y = -Math.floor(index / 4) * 0.4 - 0.5; // Vertical position
          return (
            <ControlButton
              key={clipName}
              position={[x, y, 0]}
              onClick={() =>
                controls.playSequence({
                  start: clipData.start,
                  end: clipData.end,
                })
              }
            >
              {clipName}
            </ControlButton>
          );
        }
      );

      return (
        <group position={[0, -2, 0.75]}>
          {/* Static buttons */}
          <ControlButton position={[-1, 0, 0]} onClick={handlePlay}>
            Play
          </ControlButton>
          <ControlButton position={[0, 0, 0]} onClick={handlePause}>
            Pause
          </ControlButton>
          <ControlButton position={[1, 0, 0]} onClick={handleRandomClip}>
            Random Clip
          </ControlButton>
          {/* Dynamic clip buttons */}
          <group>{clipButtons}</group>
        </group>
      );
    }, [clips, controls, handlePlay, handlePause, handleRandomClip]);

    return (
      <group {...props}>
        {Screen}
        {SubtitleDisplay}
        {Controls}
      </group>
    );
  }
);

export default memo(VideoScreen);