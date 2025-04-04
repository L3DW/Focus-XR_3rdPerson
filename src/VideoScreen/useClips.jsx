import { useState, useEffect, useMemo } from "react";
import { cleanString, timecodeToSeconds } from "./utils";

/**
 * A custom hook for loading and parsing video clips from a CSV file.
 * The clips are stored as an object where each clip is identified by a unique name.
 *
 * @param {string} clipsUrl - The URL of the clips CSV file.
 *
 * @returns {Object} An object containing clip-related data and utilities.
 * @returns {Object|null} return.clips - The parsed clips object, where each key is a clip name and the value is an object with `start` and `end` times.
 * @returns {boolean} return.isLoading - Whether the clips are still loading.
 * @returns {string|null} return.error - An error message if loading clips failed.
 */
export const useClips = (clipsUrl) => {
  const [clips, setClips] = useState(null); // Parsed clips
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  /**
   * Fetches and parses the clips CSV file.
   */
  useEffect(() => {
    const loadClips = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(clipsUrl);
        if (!response.ok) {
          throw new Error(`Failed to load clips CSV (HTTP ${response.status})`);
        }

        const csvText = await response.text();
        const lines = csvText.split("\n").filter((line) => line.trim());

        // Skip header line and parse data
        const parsedClips = lines.slice(1).reduce((acc, line) => {
          const fields = line.split("\t");
          if (fields.length >= 4) {
            const name = cleanString(fields[0]);
            const inTime = cleanString(fields[2]);
            const outTime = cleanString(fields[3]);

            acc[name] = {
              start: timecodeToSeconds(inTime),
              end: timecodeToSeconds(outTime),
            };
          }
          return acc;
        }, {});

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

  /**
   * Memoizes the returned values to avoid unnecessary re-computations.
   */
  return useMemo(() => ({ clips, isLoading, error }), [clips, isLoading, error]);
};
