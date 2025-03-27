import { useState, useEffect } from "react";

/**
 * Converts a timecode string to seconds
 * @param {string} timecode - Timecode in HH:MM:SS:FF or MM:SS format
 * @param {number} frameRate - Video frame rate (default: 30fps)
 * @returns {number} Time in seconds
 */
/*
export const timecodeToSeconds = (timecode, frameRate = 30) => {
  // Format: HH:MM:SS:FF (hours:minutes:seconds:frames)
  const parts = timecode.split(":");

  if (parts.length === 4) {
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = parseInt(parts[2]);
    const frames = parseInt(parts[3]);

    // Convert frames to fractional seconds
    const frameSeconds = frames / frameRate;

    return hours * 3600 + minutes * 60 + seconds + frameSeconds;
  }

  // Fallback for MM:SS format
  if (parts.length === 2) {
    const minutes = parseInt(parts[0]);
    const seconds = parseFloat(parts[1]);
    return minutes * 60 + seconds;
  }

  // Simple number format
  return parseFloat(timecode);
};
*/
// Reuse the existing timecode conversion function
export const timecodeToSeconds = (timecode) => {
  const [hours, minutes, seconds, frames] = timecode.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds + frames / 24; // Assuming 24 fps
};

export const useClips = (clipsUrl) => {
  const [clips, setClips] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClips = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(clipsUrl);
        if (!response.ok) {
          throw new Error(`Failed to load clips CSV (${response.status})`);
        }

        const csvText = await response.text();
        const lines = csvText.split("\n").filter((line) => line.trim());

        // Skip header line
        const dataLines = lines.slice(1);

        const parsedClips = {};

        dataLines.forEach((line) => {
          const fields = line.split("\t");
          if (fields.length >= 4) {
            const name = fields[0].replace(/\u0000/g, "").trim();
            const inTime = fields[2].replace(/\u0000/g, "").trim();
            const outTime = fields[3].replace(/\u0000/g, "").trim();

            const clipData = {
              start: timecodeToSeconds(inTime),
              end: timecodeToSeconds(outTime),
            };

            parsedClips[name] = clipData;
          }
        });

        console.log("Loaded clips:", parsedClips);
        setClips(parsedClips);
      } catch (err) {
        console.error("Error loading clips:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadClips();
  }, [clipsUrl]);

  return { clips, isLoading, error };
};
