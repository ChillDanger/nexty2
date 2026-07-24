"use client";

import { Box } from "@react-three/drei";

type ArtworkProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  color?: string;
};

export function Artwork({
  position,
  rotation = [0, 0, 0],
  width = 2,
  height = 1.5,
  color = "#d9d9d9",
}: ArtworkProps) {
  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <Box args={[width + 0.1, height + 0.1, 0.08]}>
        <meshStandardMaterial color="#3a2a18" />
      </Box>

      {/* Canvas */}
      <Box args={[width, height, 0.1]} position={[0, 0, 0.03]}>
        <meshStandardMaterial color={color} />
      </Box>
    </group>
  );
}