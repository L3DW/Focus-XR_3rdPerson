import React from "react";
import { Box, useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/Room.glb");
  console.log(materials);

  const Levels = [
    <group name="L1">
      <mesh
        name="flag"
        castShadow
        receiveShadow
        geometry={nodes.flag.geometry}
        material={materials.colormap}
        position={[4.362, 0.484, -1.028]}
      />
      <mesh
        name="block-grass-low"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-low"].geometry}
        material={materials.colormap}
        position={[4.695, 0, -0.691]}
      />
      <mesh
        name="hedge_(1)"
        castShadow
        receiveShadow
        geometry={nodes["hedge_(1)"].geometry}
        material={materials.colormap}
        position={[3.532, 0, -1.349]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="hedge_(2)"
        castShadow
        receiveShadow
        geometry={nodes["hedge_(2)"].geometry}
        material={materials.colormap}
        position={[3.532, 0, -0.312]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="hedge_(3)"
        castShadow
        receiveShadow
        geometry={nodes["hedge_(3)"].geometry}
        material={materials.colormap}
        position={[1.379, 0, -2.65]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="hedge_(4)"
        castShadow
        receiveShadow
        geometry={nodes["hedge_(4)"].geometry}
        material={materials.colormap}
        position={[1.379, 0, -1.65]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="hedge_(5)"
        castShadow
        receiveShadow
        geometry={nodes["hedge_(5)"].geometry}
        material={materials.colormap}
        position={[1.395, 0, -0.636]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="hedge_(6)"
        castShadow
        receiveShadow
        geometry={nodes["hedge_(6)"].geometry}
        material={materials.colormap}
        position={[2.803, 0, -1.697]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="hedge_(7)"
        castShadow
        receiveShadow
        geometry={nodes["hedge_(7)"].geometry}
        material={materials.colormap}
        position={[3.803, 0, -1.697]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>,
    <group name="L2">
      <mesh
        name="flag_1"
        castShadow
        receiveShadow
        geometry={nodes.flag_1.geometry}
        material={materials.colormap}
        position={[0.598, 1.997, -3.028]}
      />
      <mesh
        name="block-grass-long"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-long"].geometry}
        material={materials.colormap}
        position={[0.752, 0, -0.645]}
      />
      <mesh
        name="block-grass-overhang-low-long"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-low-long"].geometry}
        material={materials.colormap}
        position={[2.436, 0, -0.35]}
      />
      <mesh
        name="block-grass-overhang-narrow"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-narrow"].geometry}
        material={materials.colormap}
        position={[4.051, 0, -2.245]}
      />
      <mesh
        name="block-grass-overhang-edge"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-edge"].geometry}
        material={materials.colormap}
        position={[-0.111, 0, -2.073]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        name="block-grass-overhang-large-tall"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-large-tall"].geometry}
        material={materials.colormap}
        position={[1.277, 0, -2.227]}
      />
      <mesh
        name="hedge-corner"
        castShadow
        receiveShadow
        geometry={nodes["hedge-corner"].geometry}
        material={materials.colormap}
        position={[4.479, 0, -1.589]}
      />
    </group>,
    <group name="L3">
      <mesh
        name="flag_2"
        castShadow
        receiveShadow
        geometry={nodes.flag_2.geometry}
        material={materials.colormap}
        position={[-0.11, 1.997, -4.27]}
      />
      <mesh
        name="block-grass-overhang-narrow_(1)"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-narrow_(1)"].geometry}
        material={materials.colormap}
        position={[2.88, 0.93, -2.21]}
      />
      <mesh
        name="block-grass-long_1"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-long_1"].geometry}
        material={materials.colormap}
        position={[2.752, 0, -1.645]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="block-grass-overhang-low-long_1"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-low-long_1"].geometry}
        material={materials.colormap}
        position={[3.91, 0, -0.86]}
      />
      <mesh
        name="block-grass-overhang-narrow_1"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-narrow_1"].geometry}
        material={materials.colormap}
        position={[4.051, 0, -2.245]}
      />
      <mesh
        name="block-grass-overhang-large-tall_1"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-large-tall_1"].geometry}
        material={materials.colormap}
        position={[4.277, 0, -2.227]}
      />
      <mesh
        name="block-grass-overhang-low-large"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-low-large"].geometry}
        material={materials.colormap}
        position={[0.62, 1.51, -3.54]}
      />
      <mesh
        name="hedge-corner_1"
        castShadow
        receiveShadow
        geometry={nodes["hedge-corner_1"].geometry}
        material={materials.colormap}
        position={[1.77, 0, -1.96]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>,
    <group name="L4">
      <mesh
        name="flag_3"
        castShadow
        receiveShadow
        geometry={nodes.flag_3.geometry}
        material={materials.colormap}
        position={[-4.11, 1.997, -3.27]}
      />
      <mesh
        name="block-grass-overhang-narrow_(1)_1"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-narrow_(1)_1"].geometry}
        material={materials.colormap}
        position={[0.88, 0.93, -2.21]}
      />
      <mesh
        name="block-grass-long_2"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-long_2"].geometry}
        material={materials.colormap}
        position={[1.346, 0, -1.435]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="block-grass-overhang-low-long_2"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-low-long_2"].geometry}
        material={materials.colormap}
        position={[2.504, 0, -0.65]}
      />
      <mesh
        name="block-grass-overhang-large-tall_2"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-large-tall_2"].geometry}
        material={materials.colormap}
        position={[0.277, 0, -2.227]}
      />
      <mesh
        name="block-grass-overhang-low-large_1"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-low-large_1"].geometry}
        material={materials.colormap}
        position={[-3.38, 1.51, -2.54]}
      />
      <mesh
        name="platform-overhang"
        castShadow
        receiveShadow
        geometry={nodes["platform-overhang"].geometry}
        material={materials.colormap}
        position={[-1.22, 1.46, -2.53]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="hedge-corner_2"
        castShadow
        receiveShadow
        geometry={nodes["hedge-corner_2"].geometry}
        material={materials.colormap}
        position={[4.77, 0, -1.96]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>,
    <group name="L5">
      <mesh
        name="flag_4"
        castShadow
        receiveShadow
        geometry={nodes.flag_4.geometry}
        material={materials.colormap}
        position={[3.89, 1.997, -7.27]}
      />
      <mesh
        name="block-grass-large-slope-steep"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-large-slope-steep"].geometry}
        material={materials.colormap}
        position={[4, 0, -1]}
      />
      <mesh
        name="block-grass-long_3"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-long_3"].geometry}
        material={materials.colormap}
        position={[1.119, 0, -1.748]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="block-grass-overhang-low-long_3"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-low-long_3"].geometry}
        material={materials.colormap}
        position={[4.545, 1.199, -3.541]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        name="block-grass-overhang-large-tall_3"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-large-tall_3"].geometry}
        material={materials.colormap}
        position={[2.383, 0, -2.54]}
      />
      <mesh
        name="block-grass-overhang-low-large_2"
        castShadow
        receiveShadow
        geometry={nodes["block-grass-overhang-low-large_2"].geometry}
        material={materials.colormap}
        position={[4.62, 1.51, -6.54]}
      />
      <mesh
        name="platform-overhang_1"
        castShadow
        receiveShadow
        geometry={nodes["platform-overhang_1"].geometry}
        material={materials.colormap}
        position={[5.051, 1.529, -5.044]}
      />
    </group>,
  ];

  const MyTV = () => (
    <group
      position={[0, 2.625, -0.25]}
      scale={[0.425, 0.425, 0.425]}
      rotation-y={Math.PI}
    >
    </group>
  );

  const Ceiling = () => (
    <group name="Ceiling" position={[0, 12.5, 0]}>
      <mesh
        name="floorFull"
        castShadow
        receiveShadow
        geometry={nodes.floorFull.geometry}
        material={materials.wood}
      />
      <mesh
        name="floorFull_(8)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(8)"].geometry}
        material={materials.wood}
        position={[0, 0, 10]}
      />
      <mesh
        name="floorFull_(6)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(6)"].geometry}
        material={materials.wood}
        position={[10, 0, 0]}
      />
      <mesh
        name="floorFull_(9)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(9)"].geometry}
        material={materials.wood}
        position={[10, 0, 10]}
      />
      <mesh
        name="floorFull_(3)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(3)"].geometry}
        material={materials.wood}
        position={[0, 0, -10]}
      />
      <mesh
        name="floorFull_(7)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(7)"].geometry}
        material={materials.wood}
        position={[10, 0, -10]}
      />
      <mesh
        name="floorFull_(1)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(1)"].geometry}
        material={materials.wood}
        position={[-10, 0, 0]}
      />
      <mesh
        name="floorFull_(10)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(10)"].geometry}
        material={materials.wood}
        position={[-10, 0, 10]}
      />
      <mesh
        name="floorFull_(4)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(4)"].geometry}
        material={materials.wood}
        position={[-10, 0, -10]}
      />
      <mesh
        name="floorFull_(2)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(2)"].geometry}
        material={materials.wood}
        position={[-20, 0, 0]}
      />
      <mesh
        name="floorFull_(11)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(11)"].geometry}
        material={materials.wood}
        position={[-20, 0, 10]}
      />
      <mesh
        name="floorFull_(5)"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(5)"].geometry}
        material={materials.wood}
        position={[-20, 0, -10]}
      />
    </group>
  );

  const Floor = () => (
    <group name="Floors">
      <mesh
        name="floorFull_1"
        castShadow
        receiveShadow
        geometry={nodes.floorFull_1.geometry}
        material={materials.wood}
      />
      <mesh
        name="floorFull_(8)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(8)_1"].geometry}
        material={materials.wood}
        position={[0, 0, 10]}
      />
      <mesh
        name="floorFull_(6)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(6)_1"].geometry}
        material={materials.wood}
        position={[10, 0, 0]}
      />
      <mesh
        name="floorFull_(9)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(9)_1"].geometry}
        material={materials.wood}
        position={[10, 0, 10]}
      />
      <mesh
        name="floorFull_(3)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(3)_1"].geometry}
        material={materials.wood}
        position={[0, 0, -10]}
      />
      <mesh
        name="floorFull_(7)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(7)_1"].geometry}
        material={materials.wood}
        position={[10, 0, -10]}
      />
      <mesh
        name="floorFull_(1)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(1)_1"].geometry}
        material={materials.wood}
        position={[-10, 0, 0]}
      />
      <mesh
        name="floorFull_(10)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(10)_1"].geometry}
        material={materials.wood}
        position={[-10, 0, 10]}
      />
      <mesh
        name="floorFull_(4)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(4)_1"].geometry}
        material={materials.wood}
        position={[-10, 0, -10]}
      />
      <mesh
        name="floorFull_(2)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(2)_1"].geometry}
        material={materials.wood}
        position={[-20, 0, 0]}
      />
      <mesh
        name="floorFull_(11)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(11)_1"].geometry}
        material={materials.wood}
        position={[-20, 0, 10]}
      />
      <mesh
        name="floorFull_(5)_1"
        castShadow
        receiveShadow
        geometry={nodes["floorFull_(5)_1"].geometry}
        material={materials.wood}
        position={[-20, 0, -10]}
      />
    </group>
  );

  const Walls = () => (
    <group name="Walls">
      <group
        name="wallDoorway"
        position={[-0.25, 0, -9.75]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wallDoorway_1"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_1.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wallDoorway_2"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_2.geometry}
          material={materials.wood}
        />
        <mesh
          name="wallDoorway_3"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wallDoorwayWide" position={[-20, 0, 10]}>
        <mesh
          name="wallDoorwayWide_1"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorwayWide_1.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wallDoorwayWide_2"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorwayWide_2.geometry}
          material={materials.wood}
        />
        <mesh
          name="wallDoorwayWide_3"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorwayWide_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wall" position={[0, 0, 10]}>
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wall_(7)" position={[0, 0, 20]}>
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wall_(10)" position={[10, 0, 20]}>
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wall_(8)" position={[-10, 0, 20]}>
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wall_(9)" position={[-20, 0, 20]}>
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group
        name="wall_(3)"
        position={[-0.25, 0, 0.25]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group
        name="wall_(5)"
        position={[9.75, 0, 0.25]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group
        name="wall_(11)"
        position={[9.75, 0, 10.25]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group
        name="wall_(6)"
        position={[9.75, 0, -9.75]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group
        name="wall_(4)"
        position={[-30.25, 0, 0.25]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wall_(2)" position={[-10, 0, -10]}>
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wall_(1)" position={[-10, 0, 10]}>
        <mesh
          name="wall_1"
          castShadow
          receiveShadow
          geometry={nodes.wall_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wall_2"
          castShadow
          receiveShadow
          geometry={nodes.wall_2.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wall_3"
          castShadow
          receiveShadow
          geometry={nodes.wall_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <group name="wallWindowSlide" position={[-20, 0, -10]}>
        <mesh
          name="wallWindowSlide_1"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wallWindowSlide_2"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_2.geometry}
          material={materials.metalDark}
        />
        <mesh
          name="wallWindowSlide_3"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_3.geometry}
          material={materials._defaultMat}
        />
        <group name="windowBottom" position={[-3.127, 3.927, 0.15]}>
          <mesh
            name="windowBottom_3"
            castShadow
            receiveShadow
            geometry={nodes.windowBottom_3.geometry}
            material={materials.glass}
          />
          <mesh
            name="windowBottom_4"
            castShadow
            receiveShadow
            geometry={nodes.windowBottom_4.geometry}
            material={materials.wood}
          />
        </group>
        <group name="windowTop" position={[-3.127, 7.248, -0.095]}>
          <mesh
            name="windowTop_3"
            castShadow
            receiveShadow
            geometry={nodes.windowTop_3.geometry}
            material={materials.glass}
          />
          <mesh
            name="windowTop_4"
            castShadow
            receiveShadow
            geometry={nodes.windowTop_4.geometry}
            material={materials.wood}
          />
        </group>
      </group>
      <group
        name="wallWindowSlide_(1)"
        position={[-30.25, 0, -9.75]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wallWindowSlide_1"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wallWindowSlide_2"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_2.geometry}
          material={materials.metalDark}
        />
        <mesh
          name="wallWindowSlide_3"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_3.geometry}
          material={materials._defaultMat}
        />
        <group name="windowBottom_1" position={[-3.127, 3.927, 0.15]}>
          <mesh
            name="windowBottom_3"
            castShadow
            receiveShadow
            geometry={nodes.windowBottom_3.geometry}
            material={materials.glass}
          />
          <mesh
            name="windowBottom_4"
            castShadow
            receiveShadow
            geometry={nodes.windowBottom_4.geometry}
            material={materials.wood}
          />
        </group>
        <group name="windowTop_1" position={[-3.127, 7.248, -0.095]}>
          <mesh
            name="windowTop_3"
            castShadow
            receiveShadow
            geometry={nodes.windowTop_3.geometry}
            material={materials.glass}
          />
          <mesh
            name="windowTop_4"
            castShadow
            receiveShadow
            geometry={nodes.windowTop_4.geometry}
            material={materials.wood}
          />
        </group>
      </group>
      <group name="wallWindowSlide_(2)" position={[0, 0, -10]}>
        <mesh
          name="wallWindowSlide_1"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="wallWindowSlide_2"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_2.geometry}
          material={materials.metalDark}
        />
        <mesh
          name="wallWindowSlide_3"
          castShadow
          receiveShadow
          geometry={nodes.wallWindowSlide_3.geometry}
          material={materials._defaultMat}
        />
        <group name="windowBottom_2" position={[-3.127, 3.927, 0.15]}>
          <mesh
            name="windowBottom_3"
            castShadow
            receiveShadow
            geometry={nodes.windowBottom_3.geometry}
            material={materials.glass}
          />
          <mesh
            name="windowBottom_4"
            castShadow
            receiveShadow
            geometry={nodes.windowBottom_4.geometry}
            material={materials.wood}
          />
        </group>
        <group name="windowTop_2" position={[-3.127, 7.248, -0.095]}>
          <mesh
            name="windowTop_3"
            castShadow
            receiveShadow
            geometry={nodes.windowTop_3.geometry}
            material={materials.glass}
          />
          <mesh
            name="windowTop_4"
            castShadow
            receiveShadow
            geometry={nodes.windowTop_4.geometry}
            material={materials.wood}
          />
        </group>
      </group>
      <group name="wallDoorway_(1)" position={[10, 0, -10]}>
        <mesh
          name="wallDoorway_1"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_1.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wallDoorway_2"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_2.geometry}
          material={materials.wood}
        />
        <mesh
          name="wallDoorway_3"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_3.geometry}
          material={materials.metalDark}
        />
      </group>
      <mesh
        name="doorway"
        castShadow
        receiveShadow
        geometry={nodes.doorway.geometry}
        material={materials.wood}
        position={[7.41, 0, -10.23]}
      >
        <group name="door" position={[-0.283, 0, 0.446]}>
          <mesh
            name="door_2"
            castShadow
            receiveShadow
            geometry={nodes.door_2.geometry}
            material={materials.wood}
          />
          <mesh
            name="door_3"
            castShadow
            receiveShadow
            geometry={nodes.door_3.geometry}
            material={materials.metal}
          />
        </group>
      </mesh>
      <group
        name="wallDoorway_(2)"
        position={[-30.216, 0, 10.216]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="wallDoorway_1"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_1.geometry}
          material={materials._defaultMat}
        />
        <mesh
          name="wallDoorway_2"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_2.geometry}
          material={materials.wood}
        />
        <mesh
          name="wallDoorway_3"
          castShadow
          receiveShadow
          geometry={nodes.wallDoorway_3.geometry}
          material={materials.metalDark}
        />
        <mesh
          name="doorway_1"
          castShadow
          receiveShadow
          geometry={nodes.doorway_1.geometry}
          material={materials.wood}
          position={[-2.59, 0, -0.23]}
        >
          <group name="door_1" position={[-0.283, 0, 0.446]}>
            <mesh
              name="door_2"
              castShadow
              receiveShadow
              geometry={nodes.door_2.geometry}
              material={materials.wood}
            />
            <mesh
              name="door_3"
              castShadow
              receiveShadow
              geometry={nodes.door_3.geometry}
              material={materials.metal}
            />
          </group>
        </mesh>
      </group>
    </group>
  );

  const Furniture = () => (
    <group name="Furniture" position={[0, 0.5, 0]}>
      <group name="loungeSofa" position={[-10.137, 0, 5.527]}>
        <mesh
          name="loungeSofa_1"
          castShadow
          receiveShadow
          geometry={nodes.loungeSofa_1.geometry}
          material={materials.carpet}
        />
        <mesh
          name="loungeSofa_2"
          castShadow
          receiveShadow
          geometry={nodes.loungeSofa_2.geometry}
          material={materials.wood}
        />
      </group>
      <group
        name="loungeChairRelax"
        position={[-5.095, 0, -1.562]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <mesh
          name="loungeChairRelax_1"
          castShadow
          receiveShadow
          geometry={nodes.loungeChairRelax_1.geometry}
          material={materials.metal}
        />
        <mesh
          name="loungeChairRelax_2"
          castShadow
          receiveShadow
          geometry={nodes.loungeChairRelax_2.geometry}
          material={materials.carpet}
        />
        <mesh
          name="loungeChairRelax_3"
          castShadow
          receiveShadow
          geometry={nodes.loungeChairRelax_3.geometry}
          material={materials.wood}
        />
      </group>
      <group name="pottedPlant" position={[-27.896, 0, -7.867]} scale={2}>
        <mesh
          name="pottedPlant_1"
          castShadow
          receiveShadow
          geometry={nodes.pottedPlant_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="pottedPlant_2"
          castShadow
          receiveShadow
          geometry={nodes.pottedPlant_2.geometry}
          material={materials.woodDark}
        />
        <mesh
          name="plant"
          castShadow
          receiveShadow
          geometry={nodes.plant.geometry}
          material={materials.plant}
          position={[0.53, 0.591, -0.604]}
          scale={0.5}
        />
      </group>
      <group name="tableCoffeeGlassSquare" position={[-10.295, 0, 6.497]}>
        <mesh
          name="tableCoffeeGlassSquare_1"
          castShadow
          receiveShadow
          geometry={nodes.tableCoffeeGlassSquare_1.geometry}
          material={materials.metal}
        />
        <mesh
          name="tableCoffeeGlassSquare_2"
          castShadow
          receiveShadow
          geometry={nodes.tableCoffeeGlassSquare_2.geometry}
          material={materials.glass}
        />
      </group>
      <group name="lampRoundFloor" position={[-3.741, 0, 7.47]}>
        <mesh
          name="lampRoundFloor_1"
          castShadow
          receiveShadow
          geometry={nodes.lampRoundFloor_1.geometry}
          material={materials.metal}
        />
        <mesh
          name="lampRoundFloor_2"
          castShadow
          receiveShadow
          geometry={nodes.lampRoundFloor_2.geometry}
          material={materials.lamp}
        />
      </group>
      <group name="ceilingFan" position={[-14.555, 12, 0.288]}>
        <mesh
          name="ceilingFan_1"
          castShadow
          receiveShadow
          geometry={nodes.ceilingFan_1.geometry}
          material={materials.metalLight}
        />
        <mesh
          name="ceilingFan_2"
          castShadow
          receiveShadow
          geometry={nodes.ceilingFan_2.geometry}
          material={materials.lamp}
        />
        <mesh
          name="ceilingFan_3"
          castShadow
          receiveShadow
          geometry={nodes.ceilingFan_3.geometry}
          material={materials.wood}
        />
      </group>
      <group name="coatRack" position={[-21.3, 7, 18.66]}>
        <mesh
          name="coatRack_1"
          castShadow
          receiveShadow
          geometry={nodes.coatRack_1.geometry}
          material={materials.metalMedium}
        />
        <mesh
          name="coatRack_2"
          castShadow
          receiveShadow
          geometry={nodes.coatRack_2.geometry}
          material={materials.wood}
        />
      </group>
      <mesh
        name="coatRackStanding"
        castShadow
        receiveShadow
        geometry={nodes.coatRackStanding.geometry}
        material={materials.wood}
        position={[-27.633, 0, 18.596]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <group name="sideTable" position={[-11.965, 0, -9.122]}>
        <mesh
          name="sideTable_1"
          castShadow
          receiveShadow
          geometry={nodes.sideTable_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="sideTable_2"
          castShadow
          receiveShadow
          geometry={nodes.sideTable_2.geometry}
          material={materials._defaultMat}
        />
      </group>
      <group
        name="speaker"
        position={[-10.238, 0, -7.376]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="speaker_1"
          castShadow
          receiveShadow
          geometry={nodes.speaker_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="speaker_2"
          castShadow
          receiveShadow
          geometry={nodes.speaker_2.geometry}
          material={materials.metalMedium}
        />
      </group>
      <group
        name="speaker_(1)"
        position={[-20.238, 0, -7.376]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="speaker_1"
          castShadow
          receiveShadow
          geometry={nodes.speaker_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="speaker_2"
          castShadow
          receiveShadow
          geometry={nodes.speaker_2.geometry}
          material={materials.metalMedium}
        />
      </group>
      <group
        name="televisionModern"
        position={[-14.67, 3.91, -8.3]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="televisionModern_1"
          castShadow
          receiveShadow
          geometry={nodes.televisionModern_1.geometry}
          material={materials.metalDark}
        />
        <mesh
          name="televisionModern_2"
          castShadow
          receiveShadow
          geometry={nodes.televisionModern_2.geometry}
          material={materials.metal}
        />
        <MyTV />
      </group>
      <mesh
        name="bookcaseClosedWide"
        castShadow
        receiveShadow
        geometry={nodes.bookcaseClosedWide.geometry}
        material={materials.wood}
        position={[-27.474, 0, 8.123]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <group
          name="radio"
          position={[-1.103, 7.9, 0.066]}
          rotation={[0, Math.PI / 6, 0]}
        >
          <mesh
            name="radio_1"
            castShadow
            receiveShadow
            geometry={nodes.radio_1.geometry}
            material={materials.metalMedium}
          />
          <mesh
            name="radio_2"
            castShadow
            receiveShadow
            geometry={nodes.radio_2.geometry}
            material={materials.wood}
          />
          <mesh
            name="radio_3"
            castShadow
            receiveShadow
            geometry={nodes.radio_3.geometry}
            material={materials.metal}
          />
        </group>
        <group name="lampRoundTable" position={[-6, 8, 0]}>
          <mesh
            name="lampRoundTable_1"
            castShadow
            receiveShadow
            geometry={nodes.lampRoundTable_1.geometry}
            material={materials.metal}
          />
          <mesh
            name="lampRoundTable_2"
            castShadow
            receiveShadow
            geometry={nodes.lampRoundTable_2.geometry}
            material={materials.lamp}
          />
        </group>
        <group
          name="plantSmall2"
          position={[-2, 5.51, 1]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.5}
        >
          <mesh
            name="plantSmall2_1"
            castShadow
            receiveShadow
            geometry={nodes.plantSmall2_1.geometry}
            material={materials.wood}
          />
          <mesh
            name="plantSmall2_2"
            castShadow
            receiveShadow
            geometry={nodes.plantSmall2_2.geometry}
            material={materials.plant}
          />
        </group>
        <group name="books" position={[-1, 1, 0]}>
          <mesh
            name="books_1"
            castShadow
            receiveShadow
            geometry={nodes.books_1.geometry}
            material={materials.carpetDarker}
          />
          <mesh
            name="books_2"
            castShadow
            receiveShadow
            geometry={nodes.books_2.geometry}
            material={materials.carpetWhite}
          />
          <mesh
            name="books_3"
            castShadow
            receiveShadow
            geometry={nodes.books_3.geometry}
            material={materials.plant}
          />
          <mesh
            name="books_4"
            castShadow
            receiveShadow
            geometry={nodes.books_4.geometry}
            material={materials.metal}
          />
        </group>
        <group name="books_(1)" position={[-6, 3.18, 0.58]}>
          <mesh
            name="books_1"
            castShadow
            receiveShadow
            geometry={nodes.books_1.geometry}
            material={materials.carpetDarker}
          />
          <mesh
            name="books_2"
            castShadow
            receiveShadow
            geometry={nodes.books_2.geometry}
            material={materials.carpetWhite}
          />
          <mesh
            name="books_3"
            castShadow
            receiveShadow
            geometry={nodes.books_3.geometry}
            material={materials.plant}
          />
          <mesh
            name="books_4"
            castShadow
            receiveShadow
            geometry={nodes.books_4.geometry}
            material={materials.metal}
          />
        </group>
      </mesh>
      <group
        name="plantSmall1"
        position={[-7.078, 2.27, 8.175]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.5}
      >
        <mesh
          name="plantSmall1_1"
          castShadow
          receiveShadow
          geometry={nodes.plantSmall1_1.geometry}
          material={materials.wood}
        />
        <mesh
          name="plantSmall1_2"
          castShadow
          receiveShadow
          geometry={nodes.plantSmall1_2.geometry}
          material={materials.plant}
        />
      </group>
      <group
        name="loungeChair"
        position={[-25.062, 0, -0.714]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="loungeChair_1"
          castShadow
          receiveShadow
          geometry={nodes.loungeChair_1.geometry}
          material={materials.carpet}
        />
        <mesh
          name="loungeChair_2"
          castShadow
          receiveShadow
          geometry={nodes.loungeChair_2.geometry}
          material={materials.wood}
        />
      </group>
      <group name="rugRounded" position={[-7.333, 0, -5.172]}>
        <mesh
          name="rugRounded_1"
          castShadow
          receiveShadow
          geometry={nodes.rugRounded_1.geometry}
          material={materials.carpetDarker}
        />
        <mesh
          name="rugRounded_2"
          castShadow
          receiveShadow
          geometry={nodes.rugRounded_2.geometry}
          material={materials.carpet}
        />
      </group>
      <group name="tableCoffeeGlass" position={[-16.554, 0, 0.531]}>
        <mesh
          name="tableCoffeeGlass_1"
          castShadow
          receiveShadow
          geometry={nodes.tableCoffeeGlass_1.geometry}
          material={materials.metal}
        />
        <mesh
          name="tableCoffeeGlass_2"
          castShadow
          receiveShadow
          geometry={nodes.tableCoffeeGlass_2.geometry}
          material={materials.glass}
        />
      </group>
    </group>
  );

  const Level = () => (
    <group name="Levels" position={[-17.796, 2.8, 3.061]}>
      {Levels[0]}
      <group
        name="Fence"
        position={[5.01, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="fence-corner"
          castShadow
          receiveShadow
          geometry={nodes["fence-corner"].geometry}
          material={materials.colormap}
          position={[0, 0, -5.01]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <group name="GameObject" />
        </mesh>
        <mesh
          name="fence-straight_(4)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(4)"].geometry}
          material={materials.colormap}
          position={[3, 0, -1.01]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <group name="GameObject_1" />
        </mesh>
        <mesh
          name="fence-straight_(5)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(5)"].geometry}
          material={materials.colormap}
          position={[3, 0, -2.01]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <group name="GameObject_2" />
        </mesh>
        <mesh
          name="fence-straight_(6)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(6)"].geometry}
          material={materials.colormap}
          position={[3, 0, -3.01]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <group name="GameObject_3" />
        </mesh>
        <mesh
          name="fence-straight_(8)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(8)"].geometry}
          material={materials.colormap}
          position={[2, 0, -5.01]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <group name="GameObject_4" />
        </mesh>
        <mesh
          name="fence-straight_(10)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(10)"].geometry}
          material={materials.colormap}
          position={[1, 0, -0.004]}
        >
          <group name="GameObject_5" />
        </mesh>
        <mesh
          name="fence-straight_(7)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(7)"].geometry}
          material={materials.colormap}
          position={[3, 0, -4.01]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <group name="GameObject_6" />
        </mesh>
        <mesh
          name="fence-straight_(9)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(9)"].geometry}
          material={materials.colormap}
          position={[1, 0, -5.01]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <group name="GameObject_7" />
        </mesh>
        <mesh
          name="fence-straight_(11)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(11)"].geometry}
          material={materials.colormap}
          position={[2, 0, -0.004]}
        >
          <group name="GameObject_8" />
        </mesh>
        <mesh
          name="fence-straight"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight"].geometry}
          material={materials.colormap}
          position={[0, 0, -4.01]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <group name="GameObject_9" />
        </mesh>
        <mesh
          name="fence-straight_(1)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(1)"].geometry}
          material={materials.colormap}
          position={[0, 0, -3.01]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <group name="GameObject_10" />
        </mesh>
        <mesh
          name="fence-straight_(2)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(2)"].geometry}
          material={materials.colormap}
          position={[0, 0, -2.01]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <group name="GameObject_11" />
        </mesh>
        <mesh
          name="fence-straight_(3)"
          castShadow
          receiveShadow
          geometry={nodes["fence-straight_(3)"].geometry}
          material={materials.colormap}
          position={[0, 0, -1.01]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <group name="GameObject_12" />
        </mesh>
        <mesh
          name="fence-corner_(2)"
          castShadow
          receiveShadow
          geometry={nodes["fence-corner_(2)"].geometry}
          material={materials.colormap}
          position={[3, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <group name="GameObject_13" />
        </mesh>
        <mesh
          name="fence-corner_(1)"
          castShadow
          receiveShadow
          geometry={nodes["fence-corner_(1)"].geometry}
          material={materials.colormap}
          position={[3, 0, -5.01]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <group name="GameObject_14" />
        </mesh>
        <mesh
          name="fence-corner_(3)"
          castShadow
          receiveShadow
          geometry={nodes["fence-corner_(3)"].geometry}
          material={materials.colormap}
        />
      </group>
    </group>
  );

  return (
    <group {...props} dispose={null}>
        <group name="Room" position={[15.07, 0, -5.52]}>
          <Furniture />
          <Floor />
        </group>
    </group>
  );
}

useGLTF.preload("/Room.glb");
