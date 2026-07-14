import { defineField, defineType } from "sanity";

export default defineType({
  name: "recipe",
  title: "Recipes",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Recipe Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: {
    source: "title",
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
}),

    defineField({
      name: "image",
      title: "Recipe Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
{
  name: "prepTime",
  title: "Prep Time",
  type: "number",
},

{
  name: "cookTime",
  title: "Cook Time",
  type: "number",
},

{
  name: "servings",
  title: "Servings",
  type: "number",
},

{
  name: "difficulty",
  title: "Difficulty",
  type: "string",
  options: {
    list: [
      { title: "Easy", value: "Easy" },
      { title: "Medium", value: "Medium" },
      { title: "Hard", value: "Hard" },
    ],
    layout: "radio",
  },
},
    defineField({
  name: "category",
  title: "Category",
  type: "string",
  options: {
    list: [
      { title: "Breakfast", value: "breakfast" },
      { title: "Lunch", value: "lunch" },
      { title: "Dinner", value: "dinner" },
      { title: "Dessert", value: "dessert" },
      { title: "Snack", value: "snack" },
      { title: "Drink", value: "drink" },
    ],
    layout: "dropdown",
  },
}),

    defineField({
  name: "ingredients",
  title: "Ingredients",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "quantity",
          title: "Quantity",
          type: "number",
        },
        {
          name: "unit",
          title: "Unit",
          type: "string",
        },
        {
          name: "ingredient",
          title: "Ingredient",
          type: "string",
        },
      ],
    },
  ],
}),

    defineField({
      name: "directions",
      title: "Directions",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
});

