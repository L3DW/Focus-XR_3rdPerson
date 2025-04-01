import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Grid } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { XR, createXRStore } from "@react-three/xr";
import { VideoScreen } from "./VideoScreen/VideoScreen";
import { Room } from "./Scene/Room";

const store = createXRStore();

export default function App() {
  const screenRef = useRef();

  // Helper function to log video info
  const logVideoInfo = () => {
    if (screenRef.current) {
      console.log("Current Time:", screenRef.current.getCurrentTime());
      console.log("Duration:", screenRef.current.getDuration());
      console.log("Is Playing:", screenRef.current.isPlaying());
    }
  };

  return (
    <main>
      {/* HUD Controls */}
      <div id="HUD">
        {[
          { label: "Play", onClick: () => screenRef.current?.play() },
          { label: "Pause", onClick: () => screenRef.current?.pause() },
          { label: "Random Clip", onClick: () => screenRef.current?.randomClip() },
          { label: "Console Video Info", onClick: logVideoInfo },
          { label: "Enter XR", onClick: () => store.enterAR(), className: "red" },
        ].map(({ label, onClick, className }, index) => (
          <button key={index} onClick={onClick} className={className}>
            {label}
          </button>
        ))}
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
        <XR store={store}>
          <Perf />
          <ambientLight intensity={1} />
          <CameraControls />
          <Grid args={[10, 10]} position-y={0} />

          <Suspense fallback={null}>
            <VideoScreen position={[0.38, 7, -13.60]} ref={screenRef} scale={1.68} />
            <Room Scale={0.15}/>
          </Suspense>
        </XR>
      </Canvas>
    </main>
  );
}
