import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

// Reuse the existing timecode conversion function
export const timecodeToSeconds = (timecode) => {
  const [hours, minutes, seconds, frames] = timecode.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds + frames / 24; // Assuming 24 fps
};

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
          throw new Error(`Failed to load subtitles CSV (${response.status})`);
        }

        const csvText = await response.text();
        const lines = csvText.split("\n").filter((line) => line.trim());

        // Skip header line
        const dataLines = lines.slice(1);

        const parsedSubtitles = dataLines
          .map((line) => {
            // Use regex to split CSV, handling quoted fields that might contain commas
            const fields = line.match(/(?:[^,"]+|"(?:\\.|[^"])*")+/g);

            if (fields && fields.length >= 3) {
              // Remove quotes from start and end of fields
              const startTime = fields[0].replace(/^"|"$/g, "").trim();
              const endTime = fields[1].replace(/^"|"$/g, "").trim();
              // Preserve line breaks within the text, but trim surrounding whitespace
              const text = fields[2].replace(/^"|"$/g, "").trim();

              return {
                start: timecodeToSeconds(startTime),
                end: timecodeToSeconds(endTime),
                text: text,
              };
            }

            return null;
          })
          .filter((subtitle) => subtitle !== null);

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

  // Real-time subtitle tracking
  useEffect(() => {
    if (!videoElementRef?.current || !subtitles) return;

    const updateSubtitle = () => {
      if (!videoElementRef.current) return;

      const currentTime = videoElementRef.current.currentTime;

      // Find the first subtitle that matches the current time
      const activeSubtitle = subtitles.find(
        (subtitle) =>
          currentTime >= subtitle.start && currentTime < subtitle.end
      );

      // Update the current subtitle
      setCurrentSubtitle(activeSubtitle ? activeSubtitle.text : "");
    };

    // Add timeupdate event listener
    const videoElement = videoElementRef.current;
    videoElement.addEventListener("timeupdate", updateSubtitle);

    // Initial check
    updateSubtitle();

    // Cleanup
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
