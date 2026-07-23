export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.45} />

      <directionalLight
        castShadow
        position={[5, 8, 5]}
        intensity={2}
      />
    </>
  );
}