"use client";

import { Canvas } from "@react-three/fiber";
import MuseumScene from "./MuseumScene";

export default function MuseumCanvas() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 12],
        fov: 75,
      }}
    >
      <MuseumScene />
    </Canvas>
  );
}