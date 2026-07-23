import Image from "next/image";

const photos = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <div
          key={photo}
          className="overflow-hidden rounded-2xl"
        >
          <Image
            src={photo}
            alt=""
            width={800}
            height={800}
            className="aspect-square object-cover transition duration-500 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}