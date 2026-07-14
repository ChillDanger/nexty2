import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const RECIPES_QUERY = defineQuery(`
  *[_type == "recipe"]{
    _id,
    title,
    slug,
    description,
    image,
    ingredients,
    directions
  }
`);
function formatQuantity(value: number): string {
  const whole = Math.floor(value);
  const fraction = value - whole;

  const fractions: Record<string, string> = {
    "0.125": "1/8",
    "0.25": "1/4",
    "0.333": "1/3",
    "0.375": "3/8",
    "0.5": "1/2",
    "0.625": "5/8",
    "0.667": "2/3",
    "0.75": "3/4",
    "0.875": "7/8",
  };

  const roundedFraction =
    Math.round(fraction * 1000) / 1000;

  const fractionString =
    fractions[roundedFraction.toString()];

  if (whole === 0 && fractionString) {
    return fractionString;
  }

  if (whole > 0 && fractionString) {
    return `${whole} ${fractionString}`;
  }

  if (fraction === 0) {
    return whole.toString();
  }

  return value.toFixed(2).replace(/\.00$/, "");
}

export async function RecipesSection() {
  const { data: recipes } = await sanityFetch({
    query: RECIPES_QUERY,
  });

  if (!recipes?.length) return null;

  return (
    <section
      id="recipes"
      className="mx-auto max-w-5xl px-6 py-16"
    >

      <h2 className="mb-10 text-center text-4xl font-bold">
        Recipes
      </h2>

      <div className="space-y-10">
        {recipes.map((recipe: any) => (
          <div
            key={recipe._id}
            className="rounded-2xl border p-6"
          >
            {recipe.image && (
  <Image
    src={urlFor(recipe.image).width(1200).url()}
    alt={recipe.title}
    width={1200}
    height={800}
    className="mb-6 h-80 w-full rounded-xl object-cover"
  />
)}
            <h3 className="mb-2 text-2xl font-bold">
              {recipe.title}
            </h3>

            <p className="mb-6 text-muted-foreground">
              {recipe.description}
            </p>

            <h4 className="mb-3 text-xl font-semibold">
              Ingredients
            </h4>

            <ul className="mb-6 list-disc space-y-1 pl-6">
  {recipe.ingredients?.map(
    (ingredient: any, index: number) => (
      <li key={index}>
        {formatQuantity(ingredient.quantity)}{" "}
        {ingredient.unit} {ingredient.ingredient}
      </li>
    )
  )}
</ul>

            <h4 className="mb-3 text-xl font-semibold">
              Directions
            </h4>

            <ol className="list-decimal space-y-2 pl-6">
              {recipe.directions?.map((step: string) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}