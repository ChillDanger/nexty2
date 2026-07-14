import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import RecipeDetail from "@/components/recipes/RecipeDetail";

const RECIPE_QUERY = defineQuery(`
  *[_type == "recipe" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    image,
    ingredients,
    directions,
    category,
  }
`);

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: recipe }: any = await sanityFetch({
    query: RECIPE_QUERY,
    params: { slug },
  });

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return <RecipeDetail recipe={recipe} />;
}