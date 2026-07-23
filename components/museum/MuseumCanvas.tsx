"use client";

import { Canvas } from "@react-three/fiber";
import { MuseumScene } from "./MuseumScene";

export function MuseumCanvas() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 1.7, 8],
        fov: 65,
      }}
    >
      <MuseumScene />
    </Canvas>
  );
}