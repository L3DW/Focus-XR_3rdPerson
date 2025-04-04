import { memo, useEffect, useRef } from "react";
import { useControls, folder } from "leva";
import { CameraHelper } from "three";
import { useHelper } from "@react-three/drei";

function Leva_Directional() {
  const {
    dPosition,
    dIntensity,
    dColor,
    dCastShadow,
    shadowBias,
    shadowFar,
    shadowSize,
    aIntensity,
    aColor,
    dHelper,
    shadowQuality,
  } = useControls(
    "Lights",
    {
      directional: folder({
        dPosition: { value: { x: 5, y: 10, z: 5 }, label: "Position" },
        dIntensity: { value: 1, min: 0, max: 5, step: 0.1, label: "Intensity" },
        dColor: { value: "#ffffff", label: "Color" },
        dCastShadow: { value: true, label: "Cast Shadow" },
        dHelper: { value: true, label: "Show Helper" },
        shadowQuality: {
          value: "medium",
          options: ["low", "medium", "high", "ultra"],
          label: "Shadow Quality",
        },
      }),
      shadows: folder({
        shadowBias: {
          value: -0.005,
          min: -0.01,
          max: 0.01,
          step: 0.0001,
          label: "Bias",
        },
        shadowFar: {
          value: 50,
          min: 1,
          max: 100,
          step: 1,
          label: "Far",
        },
        shadowSize: {
          value: 10,
          min: 1,
          max: 50,
          step: 1,
          label: "Size",
        },
      }),
      ambient: folder({
        aIntensity: { value: 0.75, min: 0, max: 2, step: 0.05, label: "Intensity" },
        aColor: { value: "#ffffff", label: "Color" },
      }),
    },
    { collapsed: true }
  );

  const dLight = useRef();
  const dCamera = useRef();

  const shadowSizes = {
    low: 512,
    medium: 1024,
    high: 2048,
    ultra: 4096,
  };

  useEffect(() => {
    if (dLight.current) {
      dCamera.current = dHelper && dCastShadow ? dLight.current.shadow.camera : null;
      console.log("dCamera:", dCamera.current);
    }
  }, [dLight, dHelper, dCastShadow]);

  useHelper(dCamera, CameraHelper, "hotpink");

  useEffect(() => {
    if (dLight.current && dLight.current.shadow && dLight.current.shadow.camera) {
      const { camera } = dLight.current.shadow;

      camera.far = shadowFar;
      camera.left = -shadowSize;
      camera.right = shadowSize;
      camera.top = shadowSize;
      camera.bottom = -shadowSize;
      camera.updateProjectionMatrix();
    }
  }, [shadowFar, shadowSize]);

  return (
    <group>
      <ambientLight intensity={aIntensity} color={aColor} />
      <directionalLight
        ref={dLight}
        intensity={dIntensity}
        position={[dPosition.x, dPosition.y, dPosition.z]}
        color={dColor}
        castShadow={dCastShadow}
        shadow-mapSize-height={shadowSizes[shadowQuality]}
        shadow-mapSize-width={shadowSizes[shadowQuality]}
        shadow-camera-far={shadowFar}
        shadow-camera-left={-shadowSize}
        shadow-camera-right={shadowSize}
        shadow-camera-top={shadowSize}
        shadow-camera-bottom={-shadowSize}
        shadow-bias={shadowBias}
      />
    </group>
  );
}

export default memo(Leva_Directional);