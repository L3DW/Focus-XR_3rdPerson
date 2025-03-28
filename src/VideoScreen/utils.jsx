/**
 * Converts a timecode string to seconds
 * @param {string} timecode - Timecode in HH:MM:SS:FF or MM:SS format
 * @param {number} frameRate - Video frame rate (default: 24fps)
 * @returns {number} Time in seconds
 */
export const timecodeToSeconds = (timecode, frameRate = 24) => {
  const [hours = 0, minutes = 0, seconds = 0, frames = 0] = timecode.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds + frames / frameRate;
};

/**
 * Cleans a string by removing null characters and trimming whitespace
 * @param {string} str - Input string
 * @returns {string} Cleaned string
 */
export const cleanString = (str) => str.replace(/\u0000/g, "").trim();