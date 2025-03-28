import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { timecodeToSeconds, cleanString } from "./utils";

export const useSubtitles = (subtitlesUrl, videoElementRef) => {
  const [subtitles, setSubtitles] = useState(null);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const SubtitleText = (props) => <Text {...props}>{currentSubtitle}</Text>;

  return {
    SubtitleText,
    subtitles,
    currentSubtitle,
    isLoading,
    error,
  };
};
