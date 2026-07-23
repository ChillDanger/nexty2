"use client";

import { OrbitControls } from "@react-three/drei";
import { MainHall } from "./rooms/MainHall";
import { Lighting } from "./Lighting";

export function MuseumScene() {
  return (
    <>
      <Lighting />

      <MainHall />

      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={20}
      />
    </>
  );
}