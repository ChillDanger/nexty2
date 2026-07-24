"use client";

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[10, 15, 10]}
        intensity={2}
        castShadow
      />

      <pointLight
        position={[0, 6, 0]}
        intensity={1.5}
      />
    </>
  );
}