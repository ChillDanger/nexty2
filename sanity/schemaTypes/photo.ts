import { defineField, defineType } from "sanity";

export const photoType = defineType({
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
  ],
});