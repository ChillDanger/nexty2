"use client";

import { Box } from "@react-three/drei";

export default function Bench({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <Box args={[2.5, 0.2, 0.8]} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#6b4423" />
      </Box>

      <Box args={[0.15, 0.6, 0.15]} position={[-1, 0.3, -0.3]}>
        <meshStandardMaterial color="#4b3621" />
      </Box>

      <Box args={[0.15, 0.6, 0.15]} position={[1, 0.3, -0.3]}>
        <meshStandardMaterial color="#4b3621" />
      </Box>

      <Box args={[0.15, 0.6, 0.15]} position={[-1, 0.3, 0.3]}>
        <meshStandardMaterial color="#4b3621" />
      </Box>

      <Box args={[0.15, 0.6, 0.15]} position={[1, 0.3, 0.3]}>
        <meshStandardMaterial color="#4b3621" />
      </Box>
    </group>
  );
}