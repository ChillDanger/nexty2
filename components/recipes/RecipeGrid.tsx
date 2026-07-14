import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import type { RECIPES_QUERY_RESULT } from "@/sanity.types";
import RecipeFilter from "./RecipeFilter";

const RECIPES_QUERY = defineQuery(`
  *[_type == "recipe"]{
    _id,
    title,
    slug,
    description,
    image,
    category
  }
`);

export default async function RecipeGrid() {
  const { data: recipes } = (await sanityFetch({
    query: RECIPES_QUERY,
  })) as { data: RECIPES_QUERY_RESULT };

  if (!recipes?.length) {
    return (
      <p className="text-center text-muted-foreground">No recipes found.</p>
    );
  }

  return <RecipeFilter recipes={recipes} />;
}
