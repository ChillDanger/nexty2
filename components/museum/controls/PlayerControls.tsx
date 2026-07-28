"use client";

import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PlayerControls() {
  const { camera } = useThree();

  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    shift: false,
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          keys.current.w = true;
          break;
        case "KeyA":
          keys.current.a = true;
          break;
        case "KeyS":
          keys.current.s = true;
          break;
        case "KeyD":
          keys.current.d = true;
          break;
        case "ShiftLeft":
          keys.current.shift = true;
          break;
      }
    };

    const up = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          keys.current.w = false;
          break;
        case "KeyA":
          keys.current.a = false;
          break;
        case "KeyS":
          keys.current.s = false;
          break;
        case "KeyD":
          keys.current.d = false;
          break;
        case "ShiftLeft":
          keys.current.shift = false;
          break;
      }
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useFrame((_, delta) => {
    const speed = keys.current.shift ? 8 : 4;

    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    const movement = new THREE.Vector3();

    if (keys.current.w) movement.add(forward);
    if (keys.current.s) movement.sub(forward);
    if (keys.current.a) movement.sub(right);
    if (keys.current.d) movement.add(right);

    if (movement.lengthSq() > 0) {
      movement.normalize();
      camera.position.addScaledVector(movement, speed * delta);
    }
  });

  return <PointerLockControls />;
}