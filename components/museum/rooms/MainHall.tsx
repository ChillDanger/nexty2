export function MainHall() {
  return (
    <>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[18, 60]} />
        <meshStandardMaterial color="#262626" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[18, 60]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-9, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 8, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[9, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 8, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 4, -30]}>
        <boxGeometry args={[18, 8, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>

      {/* Front Wall (Entrance) */}
      <mesh position={[0, 4, 30]}>
        <boxGeometry args={[18, 8, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>
    </>
  );
}