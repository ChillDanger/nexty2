import type { SanityImageSource } from "@sanity/image-url";

export interface MuseumPhoto {
  _id: string;
  title: string;
  artist?: string;
  caption?: string;
  album?: string;
  dateTaken?: string;
  wall?: "back" | "left" | "right";
  order?: number;
  image: SanityImageSource;
}