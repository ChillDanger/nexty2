import { Artwork } from "../artwork/Artwork";
import { RigidBody } from "@react-three/rapier";

export function MainHall() {
  return (
    <>
      {/* Floor */}
      <RigidBody type="fixed" colliders="cuboid">
  <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <planeGeometry args={[80, 80]} />
    <meshStandardMaterial color="#7d6b53" />
  </mesh>
</RigidBody>

      {/* Ceiling */}
      <RigidBody type="fixed" colliders="cuboid">
      <mesh position={[0, 8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[18, 60]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      </RigidBody>

      {/* Left Wall */}
      <RigidBody type="fixed" colliders="cuboid">
      <mesh position={[-9, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 8, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>
      </RigidBody>

      {/* Right Wall */}
      <RigidBody type="fixed" colliders="cuboid">
      <mesh position={[9, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 8, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>
      </RigidBody>

      {/* Back Wall */}
      <RigidBody type="fixed" colliders="cuboid">
      <mesh position={[0, 4, -30]}>
        <boxGeometry args={[18, 60, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>
      </RigidBody>

      {/* Front Wall (Entrance) */}
      <RigidBody type="fixed" colliders="cuboid">
      <mesh position={[0, 4, 30]}>
        <boxGeometry args={[18, 60, 0.25]} />
        <meshStandardMaterial color="#f7f7f7" />
      </mesh>
      </RigidBody>
<Artwork position={[0, 4, -29.8]} />

<Artwork position={[-5, 4, -29.8]} />

<Artwork position={[5, 4, -29.8]} />

<Artwork
  position={[-8.8, 4, 0]}
  rotation={[0, Math.PI / 2, 0]}
/>

<Artwork
  position={[8.8, 4, 0]}
  rotation={[0, -Math.PI / 2, 0]}
/>
    </>
  );
}