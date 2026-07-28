import { defineField, defineType } from "sanity";

export default defineType({
  name: "photo",
  title: "Photo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "caption",
      type: "text",
    }),
    defineField({
      name: "album",
      type: "string",
    }),
    defineField({
      name: "dateTaken",
      type: "date",
    }),
    defineField({
  name: "artist",
  title: "Artist",
  type: "string",
  initialValue: "Daniel Alswanger",
}),
defineField({
  name: "featured",
  title: "Featured in Museum",
  type: "boolean",
  initialValue: true,
}),
defineField({
  name: "wall",
  title: "Wall",
  type: "string",
  options: {
    list: [
      { title: "Back", value: "back" },
      { title: "Left", value: "left" },
      { title: "Right", value: "right" },
    ],
  },
}),
defineField({
  name: "order",
  title: "Display Order",
  type: "number",
}),
  ],
});