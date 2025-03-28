import { useState, useEffect, useMemo } from "react";
import { cleanString, timecodeToSeconds } from "./utils";

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

  return useMemo(() => ({ clips, isLoading, error }), [clips, isLoading, error]);
};
