import React, {
  forwardRef,
  useMemo,
  useCallback,
  memo,
  useImperativeHandle,
} from "react";
import { Box, Text } from "@react-three/drei";

import { useClips } from "./useClips";
import { useSubtitles } from "./useSubtitles";
import { useVideoTextureControls } from "./useVideoTextureControls";

// Memoize the control buttons to prevent unnecessary re-renders
const ControlButton = memo(({ onClick, children, ...props }) => (
  <Box
    args={[0.75, 0.2, 0.1]}
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    {...props}
  >
    <Text color="black" fontSize={0.1} position={[0, 0, 0.055]}>
      {children}
    </Text>
  </Box>
));

export const VideoScreen = memo(
  forwardRef(
    (
      {
        videoSrc = "/video.webm",
        clipsUrl = "/clips.csv",
        subtitles = "/subtitles.csv",
        ...props
      },
      ref
    ) => {
      /******************************************************************************************
       * SCREEN 
      /******************************************************************************************/
      // Memoize clips data to reduce redundant computations
      const { clips } = useClips(clipsUrl);
      // Memoize video texture and controls to prevent unnecessary recreations
      const { videoTexture, videoElementRef, controls } =
        useVideoTextureControls(videoSrc);
      // Memoize video screen and subtitle components
      const Screen = useMemo(
        () => (
          <mesh {...props}>
            <planeGeometry args={[16, 9]} />
            <meshBasicMaterial map={videoTexture} toneMapped={false} />
          </mesh>
        ),
        [props, videoTexture]
      );

      /******************************************************************************************
       * SUBTITLES 
      /******************************************************************************************/
      // Memoize subtitle component to optimize performance
      const { SubtitleText } = useSubtitles(subtitles, videoElementRef);
      const SubtitleDisplay = useMemo(
        () => (
          <Box name="Subtitles" args={[4, 0.5, 0.1]} position-y={-1.5}>
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

      /******************************************************************************************
       * CONTROLS 
      /******************************************************************************************/
      // Memoize random clip selection to prevent unnecessary recalculations
      const getRandomClip = useCallback(() => {
        if (!clips || Object.keys(clips).length === 0) return null;

        const clipKeys = Object.keys(clips);
        const randomKey = clipKeys[Math.floor(Math.random() * clipKeys.length)];
        return clips[randomKey];
      }, [clips]);
      // Memoize control handlers to maintain referential equality

      const handlePause = useCallback(() => {
        controls.pause();
      }, [controls]);

      const handlePlay = useCallback(() => {
        controls.play();
      }, [controls]);

      const handleRandomClip = useCallback(() => {
        const randomClip = getRandomClip();
        if (randomClip) {
          controls.playSequence({
            start: randomClip.start,
            end: randomClip.end,
          });
        }
      }, [getRandomClip, controls]);

      // Use useImperativeHandle to expose methods to parent component
      useImperativeHandle(
        ref,
        () => ({
          play: handlePlay,
          pause: handlePause,
          randomClip: handleRandomClip,
          // Optional: expose additional controls or information
          getCurrentTime: () => videoElementRef.current?.currentTime,
          getDuration: () => videoElementRef.current?.duration,
          isPlaying: () => !videoElementRef.current?.paused,
        }),
        [controls, getRandomClip]
      );

      const Controls = useMemo(() => {
        if (!clips) return null;

        const clipKeys = Object.keys(clips);
        const columns = 4; // Number of buttons per row
        const buttonSpacing = 1; // Spacing between buttons

        // Generate a button for each clip
        const clipButtons = clipKeys.map((clipName, index) => {
          const clipData = clips[clipName];

          // Calculate grid positions
          const row = Math.floor(index / columns); // Determine the row
          const col = index % columns; // Determine the column

          const x = col * buttonSpacing - (columns - 1) * buttonSpacing / 2; // Center the grid horizontally
          const y = -row * buttonSpacing / 2.5; // Arrange rows vertically

          return (
            <ControlButton
              key={clipName}
              position={[x, y, 0]} // Set position in 3D space
              onClick={() => controls.playSequence({ start: clipData.start, end: clipData.end })}
            >
              {clipName}
            </ControlButton>
          );
        });

        return (
          <group position={[0, -2, 0]}>

            {/* Existing buttons */}
            <ControlButton position={[-1, 0, 0]} onClick={handlePlay}>
              Play
            </ControlButton>
            <ControlButton position={[0, 0, 0]} onClick={handlePause}>
              Pause
            </ControlButton>
            <ControlButton position={[1, 0, 0]} onClick={handleRandomClip}>
              Random Clip
            </ControlButton>

            {/* Add the dynamically generated buttons */}
            <group position-y={-.5}>
              {clipButtons}
            </group>
          </group>
        );
      }, [clips, controls, handlePlay, handlePause, handleRandomClip]);

      return (
        <>
          {Screen}
          {SubtitleDisplay}
          {Controls}
        </>
      );
    }
  )
);
