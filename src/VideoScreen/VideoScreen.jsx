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
const ControlButton = memo(({ position, onClick, children }) => (
  <Box
    args={[0.75, 0.2, 0.1]}
    position-x={position}
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
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

      const Controls = useMemo(
        () => (
          <group position={[0, -2, 0]}>
            <ControlButton position={1} onClick={handlePause}>
              Pause
            </ControlButton>

            <ControlButton position={0} onClick={handleRandomClip}>
              Random Clip
            </ControlButton>

            <ControlButton position={-1} onClick={handlePlay}>
              Play
            </ControlButton>
          </group>
        ),
        [controls]
      );

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
