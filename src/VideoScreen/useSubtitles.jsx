import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { timecodeToSeconds, cleanString } from "./utils";

/**
 * A custom hook for managing subtitles in a Three.js video scene.
 * It fetches subtitles from a CSV file, synchronizes them with the video playback,
 * and provides a `SubtitleText` component for rendering the current subtitle.
 *
 * @param {string} subtitlesUrl - The URL of the subtitles CSV file.
 * @param {React.MutableRefObject<HTMLVideoElement|null>} videoElementRef - A ref to the video element.
 *
 * @returns {Object} An object containing subtitle-related data and utilities.
 * @returns {React.FC} return.SubtitleText - A React component for rendering the current subtitle.
 * @returns {Array<Object>} return.subtitles - The parsed subtitles array.
 * @returns {string} return.currentSubtitle - The currently active subtitle text.
 * @returns {boolean} return.isLoading - Whether the subtitles are still loading.
 * @returns {string|null} return.error - An error message if loading subtitles failed.
 */
export const useSubtitles = (subtitlesUrl, videoElementRef) => {
  const [subtitles, setSubtitles] = useState(null); // Parsed subtitles
  const [currentSubtitle, setCurrentSubtitle] = useState(""); // Current subtitle text
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  /**
   * Fetches and parses the subtitles CSV file.
   */
  useEffect(() => {
    const loadSubtitles = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(subtitlesUrl);
        if (!response.ok) {
          throw new Error(`Failed to load subtitles CSV (HTTP ${response.status})`);
        }

        const csvText = await response.text();
        const lines = csvText.split("\n").filter((line) => line.trim());

        // Skip header line and parse data
        const parsedSubtitles = lines.slice(1)
          .map((line) => {
            // Use regex to split CSV, handling quoted fields that might contain commas
            const fields = line.match(/(?:[^,"]+|"(?:\\.|[^"])*")+/g);

            if (fields && fields.length >= 3) {
              const startTime = cleanString(fields[0].replace(/^"|"$/g, ""));
              const endTime = cleanString(fields[1].replace(/^"|"$/g, ""));
              const text = cleanString(fields[2].replace(/^"|"$/g, ""));

              return {
                start: timecodeToSeconds(startTime),
                end: timecodeToSeconds(endTime),
                text,
              };
            }

            return null;
          })
          .filter(Boolean); // Remove null entries

        setSubtitles(parsedSubtitles);
      } catch (err) {
        console.error("Error loading subtitles:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadSubtitles();
  }, [subtitlesUrl]);

  /**
   * Synchronizes the current subtitle with the video's playback time.
   */
  useEffect(() => {
    if (!videoElementRef?.current || !subtitles) return;

    const updateSubtitle = () => {
      const currentTime = videoElementRef.current?.currentTime || 0;

      // Find the first subtitle that matches the current time
      const activeSubtitle = subtitles.find(
        (subtitle) => currentTime >= subtitle.start && currentTime < subtitle.end
      );

      setCurrentSubtitle(activeSubtitle ? activeSubtitle.text : "");
    };

    const videoElement = videoElementRef.current;
    videoElement.addEventListener("timeupdate", updateSubtitle);

    // Initial check
    updateSubtitle();

    return () => {
      videoElement.removeEventListener("timeupdate", updateSubtitle);
    };
  }, [videoElementRef, subtitles]);

  /**
   * A React component for rendering the current subtitle.
   *
   * @param {Object} props - Props for the `Text` component from `@react-three/drei`.
   * @returns {JSX.Element} The rendered subtitle text.
   */
  const SubtitleText = (props) => <Text {...props}>{currentSubtitle}</Text>;

  return {
    SubtitleText,
    subtitles,
    currentSubtitle,
    isLoading,
    error,
  };
};
