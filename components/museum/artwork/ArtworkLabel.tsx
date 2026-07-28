"use client";

import { Text } from "@react-three/drei";
import { Box } from "@react-three/drei";
import type { MuseumPhoto } from "../types";

interface ArtworkLabelProps {
  photo: MuseumPhoto;
}

export default function ArtworkLabel({ photo }: ArtworkLabelProps) {
  return (
    <group position={[0, -1.25, 0.08]}>
      {/* Plaque */}
      <Box args={[1.6, 0.45, 0.03]}>
        <meshStandardMaterial color="#d6c39b" />
      </Box>

      {/* Title */}
      <Text
        position={[0, 0.08, 0.02]}
        fontSize={0.07}
        color="black"
        anchorX="center"
      >
        {photo.title}
      </Text>

      {/* Artist */}
      <Text
        position={[0, -0.08, 0.02]}
        fontSize={0.05}
        color="#444"
        anchorX="center"
      >
        {photo.artist}
      </Text>
    </group>
  );
}