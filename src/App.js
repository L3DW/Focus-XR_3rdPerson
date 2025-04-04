import { Suspense, useRef, useCallback, useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Grid } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { XR, createXRStore } from "@react-three/xr";
import VideoScreen from "./VideoScreen/VideoScreen";
import Room from "./Scene/Room";
import useGlobalState from "./State/globalState"; // Import global state

const XRStore = createXRStore();

/**
 * The main application component for rendering the 3D scene, HUD, and XR functionality.
 *
 * This component integrates a video screen, a 3D room, and XR (Extended Reality) capabilities.
 * It also provides a HUD (Heads-Up Display) with buttons to control video playback and XR mode.
 *
 * @returns {JSX.Element} The rendered application.
 */
export default function App() {
  const screenRef = useRef(); // Ref to the VideoScreen component
  const { setXRStore } = useGlobalState(); // Access the global state setter for XRStore

  /**
   * Sets the XRStore in the global state when the component mounts.
   */
  useEffect(() => {
    setXRStore(XRStore);
  }, [setXRStore]);

  /**
   * Plays the video on the VideoScreen.
   */
  const Play = useCallback(() => screenRef.current?.play(), []);

  /**
   * Pauses the video on the VideoScreen.
   */
  const Pause = useCallback(() => screenRef.current?.pause(), []);

  /**
   * Plays a random clip from the VideoScreen's clips.
   */
  const RandomClip = useCallback(() => screenRef.current?.randomClip(), []);

  /**
   * Enters XR (Extended Reality) mode.
   */
  const EnterXR = useCallback(() => XRStore.enterAR(), []);

  /**
   * Logs video information (current time, duration, and playback status) to the console.
   */
  const logVideoInfo = useCallback(() => {
    if (!screenRef.current) return;
    console.log(`Video Info:
    Current Time: ${screenRef.current.getCurrentTime()}
    Duration: ${screenRef.current.getDuration()}
    Is Playing: ${screenRef.current.isPlaying()}`);
  }, []);

  /**
   * Defines the HUD buttons and their associated actions.
   * @type {Array<Object>} An array of button configurations.
   */
  const hudButtons = useMemo(
    () => [
      { label: "Play", onClick: Play },
      { label: "Pause", onClick: Pause },
      { label: "Random Clip", onClick: RandomClip },
      { label: "Console Video Info", onClick: logVideoInfo },
      { label: "Enter XR", onClick: EnterXR, className: "red" },
    ],
    [Play, Pause, RandomClip, logVideoInfo, EnterXR]
  );

  return (
    <main>
      {/* HUD (Heads-Up Display) */}
      <div id="HUD">
        {hudButtons.map(({ label, onClick, className }, index) => (
          <button key={index} onClick={onClick} className={className}>
            {label}
          </button>
        ))}
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
        <XR store={XRStore}>
          <Perf />
          <ambientLight intensity={1} />
          <CameraControls />
          <Grid args={[10, 10]} position-y={0} />
          <Suspense fallback={null}>
            {/* Video Screen */}
            <VideoScreen
              id="videoScreen"
              position={[0.38, 7, -13.6]}
              ref={screenRef}
              scale={1.68}
            />
            {/* 3D Room */}
            <Room Scale={0.15} />
          </Suspense>
        </XR>
      </Canvas>
    </main>
  );
}
