"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MuseumScene from "./MuseumScene";
import type { MuseumPhoto } from "./types";
import { Physics } from "@react-three/rapier";

interface MuseumCanvasProps {
  photos: MuseumPhoto[];
}

export default function MuseumCanvas({
  photos,
}: MuseumCanvasProps) {
  return (
    <Canvas
  shadows
  camera={{
    position: [0, 2, 12],
    fov: 75,
  }}
>
  <Suspense fallback={null}>
    <Physics gravity={[0, -9.81, 0]}>
      <MuseumScene photos={photos} />
    </Physics>
  </Suspense>
</Canvas>
  );
}