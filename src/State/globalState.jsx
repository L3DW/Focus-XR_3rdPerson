import { create } from "zustand"; // Explicitly import create

/**
 * Zustand store for managing global application state, including XR state and video screens.
 */
const useGlobalState = create((set, get) => ({
  /**************************
   * XR State
   **************************/

  /**
   * The XRStore instance for managing XR-related functionality.
   * @type {Object|null}
   */
  XRStore: null,

  /**
   * Sets the XRStore instance in the global state.
   * @param {Object} store - The XRStore instance to set.
   */
  setXRStore: (store) => set({ XRStore: store }),

  /**************************
   * Video Screens State
   **************************/

  /**
   * An object to store state for each VideoScreen instance.
   * Each key is a unique VideoScreen ID, and the value is an object containing the screen's state.
   * @type {Object<string, Object>}
   */
  videoScreens: {},

  /**
   * Adds a new VideoScreen instance to the global state.
   * @param {string} id - The unique identifier for the VideoScreen instance.
   * @param {Object} data - The data associated with the VideoScreen instance.
   * @param {React.MutableRefObject<HTMLVideoElement|null>} [data.videoElementRef] - A ref to the video element.
   * @param {Object} [data.controls] - Playback controls for the video.
   * @param {Object} [data.clips] - Parsed clips associated with the video.
   * @param {Array<Object>} [data.subtitles] - Parsed subtitles associated with the video.
   */
  addVideoScreen: (id, data) =>
    set((state) => ({
      videoScreens: {
        ...state.videoScreens,
        [id]: { ...data },
      },
    })),

  /**
   * Updates an existing VideoScreen instance in the global state.
   * @param {string} id - The unique identifier for the VideoScreen instance.
   * @param {Object} updates - The updates to apply to the VideoScreen instance.
   */
  updateVideoScreen: (id, updates) =>
    set((state) => ({
      videoScreens: {
        ...state.videoScreens,
        [id]: {
          ...state.videoScreens[id],
          ...updates,
        },
      },
    })),

  /**
   * Removes a VideoScreen instance from the global state.
   * @param {string} id - The unique identifier for the VideoScreen instance to remove.
   */
  removeVideoScreen: (id) =>
    set((state) => {
      const { [id]: _, ...remainingScreens } = state.videoScreens;
      return { videoScreens: remainingScreens };
    }),

  /**
   * Retrieves a specific VideoScreen instance from the global state.
   * @param {string} id - The unique identifier for the VideoScreen instance to retrieve.
   * @returns {Object|null} The state of the specified VideoScreen instance, or null if not found.
   */
  getVideoScreen: (id) => get().videoScreens[id],
}));

export default useGlobalState;