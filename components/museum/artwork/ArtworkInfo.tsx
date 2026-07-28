"use client";

import { useMuseum } from "../MuseumContext";

export default function ArtworkInfo() {
  const { selectedArtwork, setSelectedArtwork } = useMuseum();

  if (!selectedArtwork) return null;

  return (
    <div className="absolute top-6 right-6 z-50 w-96 rounded-xl bg-black/80 p-6 text-white backdrop-blur">
      <button
        onClick={() => setSelectedArtwork(null)}
        className="float-right text-xl"
      >
        ✕
      </button>

      <h2 className="mb-2 text-3xl font-bold">
        {selectedArtwork.title}
      </h2>

      <p>{selectedArtwork.artist}</p>

      {selectedArtwork.caption && (
        <p className="mt-4">{selectedArtwork.caption}</p>
      )}

      <div className="mt-4">
        Album: {selectedArtwork.album}
      </div>

      <div>
        Date: {selectedArtwork.dateTaken}
      </div>
    </div>
  );
}