"use client";

import { MainHall } from "./rooms/MainHall";
import Lighting from "./Lighting";
import Player from "./Player";

export default function MuseumScene() {
  return (
    <>
      <Lighting />

      <MainHall />

      <Player />
    </>
  );
}