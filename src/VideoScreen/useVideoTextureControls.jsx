import { useRef, useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";

/**
 * A custom hook for managing video textures and playback controls in a Three.js scene.
 *
 * @param {string} videoSrc - The source URL of the video.
 * @param {Object} [options={}] - Optional configuration for the video texture.
 * @param {boolean} [options.start=false] - Whether the video should start playing immediately.
 * @param {boolean} [options.muted=false] - Whether the video should be muted by default.
 * @param {boolean} [options.loop=false] - Whether the video should loop.
 * @param {Function} [options.onVideoFrame] - Callback function for handling video frame updates.
 * @param {string} [options.crossOrigin="anonymous"] - Cross-origin attribute for the video.
 *
 * @returns {Object} An object containing the video texture, a reference to the video element, and playback controls.
 * @returns {THREE.VideoTexture} return.videoTexture - The video texture for use in Three.js materials.
 * @returns {React.MutableRefObject<HTMLVideoElement|null>} return.videoElementRef - A ref to the video element.
 * @returns {Object} return.controls - An object containing methods to control video playback.
 * @returns {Function} return.controls.play - Plays the video.
 * @returns {Function} return.controls.pause - Pauses the video.
 * @returns {Function} return.controls.toggleMute - Toggles the mute state of the video.
 * @returns {Function} return.controls.setMute - Sets the mute state of the video.
 * @returns {Function} return.controls.setVolume - Sets the volume of the video (0 to 1).
 * @returns {Function} return.controls.playSequence - Plays a specific sequence of the video.
 */
export const useVideoTextureControls = (videoSrc, options = {}) => {
  const videoElementRef = useRef(null); // Ref to the video element
  const stopTime = useRef(null); // Ref to track the stop time for sequences

  /**
   * Handles pausing the video when the stop time is reached.
   *
   * @param {Object} _ - Unused parameter.
   * @param {Object} metadata - Metadata about the current video frame.
   * @param {number} metadata.mediaTime - The current playback time of the video.
   */
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
    /**
     * Plays the video.
     */
    play: () => videoElementRef.current?.play(),

    /**
     * Pauses the video.
     */
    pause: () => videoElementRef.current?.pause(),

    /**
     * Toggles the mute state of the video.
     */
    toggleMute: () => {
      if (videoElementRef.current) {
        videoElementRef.current.muted = !videoElementRef.current.muted;
      }
    },

    /**
     * Sets the mute state of the video.
     *
     * @param {boolean} mute - Whether to mute the video.
     */
    setMute: (mute) => {
      if (videoElementRef.current) {
        videoElementRef.current.muted = mute;
      }
    },

    /**
     * Sets the volume of the video.
     *
     * @param {number} volume - The volume level (0 to 1).
     */
    setVolume: (volume) => {
      if (videoElementRef.current) {
        videoElementRef.current.volume = Math.max(0, Math.min(1, volume)); // Clamp volume between 0 and 1
      }
    },

    /**
     * Plays a specific sequence of the video.
     *
     * @param {Object} sequence - The sequence to play.
     * @param {number} sequence.start - The start time of the sequence in seconds.
     * @param {number} sequence.end - The end time of the sequence in seconds.
     */
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
