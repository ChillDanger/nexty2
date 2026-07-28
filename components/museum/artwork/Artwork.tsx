"use client";

import { Box, useTexture } from "@react-three/drei";
import { urlFor } from "@/sanity/lib/image";
import type { MuseumPhoto } from "../types";
import ArtworkLabel from "./ArtworkLabel";
import { useState } from "react";
import { useMuseum } from "../MuseumContext";

type ArtworkProps = {
  photo: MuseumPhoto;
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
};

export function Artwork({
  photo,
  position,
  rotation = [0, 0, 0],
  width = 2,
  height = 1.5,
}: ArtworkProps) {
  if (!photo?.image) return null;

  const imageUrl = urlFor(photo.image).width(1200).url();
  const texture = useTexture(imageUrl);
  const [hovered, setHovered] = useState(false);
  const {
    setSelectedArtwork,
} = useMuseum();

  return (
    <group
  position={position}
  rotation={rotation}
  scale={hovered ? 1.05 : 1}
  onPointerOver={() => setHovered(true)}
  onPointerOut={() => setHovered(false)}
  onClick={() => setSelectedArtwork(photo)}
>
<spotLight
  position={[0, 2.5, 1.5]}
  angle={0.35}
  penumbra={0.7}
  intensity={6}
  castShadow
/>

      {/* Frame */}
      <Box args={[width + 0.15, height + 0.15, 0.12]}>
        <meshStandardMaterial color="#3a2a18" />
      </Box>

      {/* Canvas */}
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <ArtworkLabel photo={photo} />
    </group>
  );
}