import { defineQuery } from "next-sanity";

export const MUSEUM_PHOTOS_QUERY = defineQuery(`
*[_type == "photo"]
| order(order asc) {
  _id,
  title,
  artist,
  caption,
  album,
  dateTaken,
  wall,
  order,
  image
}
`);