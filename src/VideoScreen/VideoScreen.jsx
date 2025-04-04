import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useCallback,
} from "react";
import { Box } from "@react-three/drei";
import useGlobalState from "../State/globalState";
import { useClips } from "./useClips";
import { useSubtitles } from "./useSubtitles";
import { useVideoTextureControls } from "./useVideoTextureControls";

/**
 * A 3D video screen component that displays a video, handles playback controls,
 * and optionally displays subtitles. Each instance is uniquely identified and
 * managed in the global state.
 *
 * @param {Object} props - The props for the VideoScreen component.
 * @param {string} props.id - A unique identifier for this VideoScreen instance.
 * @param {string} [props.videoSrc="/video.webm"] - The source URL for the video.
 * @param {string} [props.clipsUrl="/clips.csv"] - The URL for the clips CSV file.
 * @param {string} [props.subtitles="/subtitles.csv"] - The URL for the subtitles CSV file.
 * @param {Object} ref - A React ref to expose methods to the parent component.
 * @returns {JSX.Element} The VideoScreen component.
 */
const VideoScreen = forwardRef(
  (
    {
      id, // Unique identifier for this VideoScreen instance
      videoSrc = "/video.webm",
      clipsUrl = "/clips.csv",
      subtitles = "/subtitles.csv",
      ...props
    },
    ref
  ) => {
    const { addVideoScreen, updateVideoScreen, removeVideoScreen } =
      useGlobalState();

    // Hooks for clips, video texture, and subtitles
    const { clips } = useClips(clipsUrl);
    const { videoTexture, videoElementRef, controls } =
      useVideoTextureControls(videoSrc);
    const { SubtitleText } = useSubtitles(subtitles, videoElementRef);

    /**
     * Register this VideoScreen in the global state when it mounts,
     * and remove it when it unmounts.
     */
    useEffect(() => {
      addVideoScreen(id, {
        videoElementRef,
        controls,
        clips,
        subtitles,
        useRef: ref,
      });

      // Cleanup function to remove the VideoScreen
      return () => {
        removeVideoScreen(id);
      };
    }, [id, addVideoScreen, removeVideoScreen]);

    /**
     * Update the global state when clips or subtitles change.
     */
    useEffect(() => {
      updateVideoScreen(id, { clips, subtitles });
    }, [id, clips, subtitles, updateVideoScreen]);

    /**
     * Play the video.
     */
    const play = useCallback(() => {
      controls.play();
    }, [controls]);

    /**
     * Pause the video.
     */
    const pause = useCallback(() => {
      controls.pause();
    }, [controls]);

    /**
     * Play a random clip from the clips list.
     */
    const randomClip = useCallback(() => {
      if (!clips || Object.keys(clips).length === 0) return;
      const clipKeys = Object.keys(clips);
      const randomKey = clipKeys[Math.floor(Math.random() * clipKeys.length)];
      const randomClip = clips[randomKey];
      controls.playSequence({ start: randomClip.start, end: randomClip.end });
    }, [clips, controls]);

    /**
     * Get the current playback time of the video.
     * @returns {number} The current playback time in seconds.
     */
    const getCurrentTime = useCallback(() => {
      return videoElementRef.current?.currentTime;
    }, [videoElementRef]);

    /**
     * Get the total duration of the video.
     * @returns {number} The total duration of the video in seconds.
     */
    const getDuration = useCallback(() => {
      return videoElementRef.current?.duration;
    }, [videoElementRef]);

    /**
     * Check if the video is currently playing.
     * @returns {boolean} True if the video is playing, false otherwise.
     */
    const isPlaying = useCallback(() => {
      return !videoElementRef.current?.paused;
    }, [videoElementRef]);

    // Expose methods to the parent component via the ref
    useImperativeHandle(
      ref,
      () => ({
        play,
        pause,
        randomClip,
        getCurrentTime,
        getDuration,
        isPlaying,
      }),
      [play, pause, randomClip, getCurrentTime, getDuration, isPlaying]
    );

    return (
      <group {...props}>
        {/* Video Screen */}
        <mesh scale={0.25}>
          <planeGeometry args={[16, 9]} />
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>

        {/* Subtitles */}
        <Box name="Subtitles" args={[4, 0.5, 0.1]} position={[0, -1.5, 0.75]}>
          <SubtitleText
            color="black"
            fontSize={0.15}
            position={[0, 0, 0.055]}
            anchorX="center"
            anchorY="middle"
            textAlign="center"
          />
        </Box>
      </group>
    );
  }
);

export default VideoScreen;
