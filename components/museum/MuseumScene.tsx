"use client";

import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { Lighting } from "./Lighting";

export function MuseumScene() {
  return (
    <>
      <Lighting />

      <Room />

      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={20}
      />
    </>
  );
}