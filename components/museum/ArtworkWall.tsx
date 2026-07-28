"use client";

import { Artwork } from "./artwork/Artwork";
import type { MuseumPhoto } from "./types";

interface ArtworkWallProps {
  photos: MuseumPhoto[];
}

export function ArtworkWall({
  photos,
}: ArtworkWallProps) {
  const spacing = 5;

  return (
    <>
      {/* Back Wall */}
      {photos
        .filter((photo) => photo.wall === "back")
        .map((photo, index) => (
          <Artwork
            key={photo._id}
            photo={photo}
            position={[
              (index - 1) * spacing,
              4,
              -29.8,
            ]}
          />
        ))}

      {/* Left Wall */}
      {photos
        .filter((photo) => photo.wall === "left")
        .map((photo, index) => (
          <Artwork
            key={photo._id}
            photo={photo}
            position={[
              -8.8,
              4,
              (index - 1) * spacing,
            ]}
            rotation={[0, Math.PI / 2, 0]}
          />
        ))}

      {/* Right Wall */}
      {photos
        .filter((photo) => photo.wall === "right")
        .map((photo, index) => (
          <Artwork
            key={photo._id}
            photo={photo}
            position={[
              8.8,
              4,
              (index - 1) * spacing,
            ]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        ))}
    </>
  );
}