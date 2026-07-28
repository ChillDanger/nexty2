"use client";

import { useState } from "react";
import EnterMuseumOverlay from "./ui/EnterMuseumOverlay";

export default function MuseumUI() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <EnterMuseumOverlay
        onEnter={() => setEntered(true)}
      />
    );
  }

  return null;
}