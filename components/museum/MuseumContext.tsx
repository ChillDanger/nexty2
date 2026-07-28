"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import type { MuseumPhoto } from "./types";

interface MuseumContextType {
  selectedArtwork: MuseumPhoto | null;
  setSelectedArtwork: (photo: MuseumPhoto | null) => void;
}

const MuseumContext = createContext<MuseumContextType | null>(null);

export function MuseumProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedArtwork, setSelectedArtwork] =
    useState<MuseumPhoto | null>(null);

  return (
    <MuseumContext.Provider
      value={{
        selectedArtwork,
        setSelectedArtwork,
      }}
    >
      {children}
    </MuseumContext.Provider>
  );
}

export function useMuseum() {
  const context = useContext(MuseumContext);

  if (!context) {
    throw new Error(
      "useMuseum must be used inside MuseumProvider"
    );
  }

  return context;
}