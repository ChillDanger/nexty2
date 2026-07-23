export function Room() {
  return (
    <>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#202020" />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 2.5, -10]}>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-10, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[10, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>
    </>
  );
}