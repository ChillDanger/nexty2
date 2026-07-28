"use client";

import Lighting from "./Lighting";
import Player from "./Player";
import { MainHall } from "./rooms/MainHall";
import { ArtworkWall } from "./ArtworkWall";
import type { MuseumPhoto } from "./types";

interface MuseumSceneProps {
  photos: MuseumPhoto[];
}

export default function MuseumScene({
  photos,
}: MuseumSceneProps) {
  return (
    <>
      <Lighting />

      <MainHall />

      <ArtworkWall photos={photos} />

      <Player />
    </>
  );
}