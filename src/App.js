import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Grid } from "@react-three/drei";
import { Perf } from "r3f-perf";

// import HUD from "./HUD";
import { VideoScreen } from "./VideoScreen/VideoScreen";

export default function App() {
  const screenRef = useRef();
  return (
    <main>
      <div id="HUD">
        <button onClick={() => screenRef.current.play()}>Play</button>
        <button onClick={() => screenRef.current.randomClip()}>
          Random Clip
        </button>
        <button onClick={() => screenRef.current.pause()}>Pause</button>
        <button
          onClick={() => {
            console.log("Current Time:", screenRef.current.getCurrentTime());
            console.log("Duration:", screenRef.current.getDuration());
            console.log("Is Playing:", screenRef.current.isPlaying());
          }}
        >
          Console Video Info
        </button>
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 100 }}>
        <Perf />
        <ambientLight intensity={1} />
        <CameraControls />
        <Grid args={[10, 10]} position-y={-2.5} />
        <VideoScreen scale={0.25} ref={screenRef} />
      </Canvas>
    </main>
  );
}
