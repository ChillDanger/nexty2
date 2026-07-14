"use client";

import Image from "next/image";
import { useState } from "react";
import { formatQuantity } from "@/lib/recipe-utils";
import { urlFor } from "@/sanity/lib/image";
import type { RECIPE_QUERY_RESULT } from "@/sanity.types";
import { motion } from "framer-motion";


type RecipeDetailRecipe = NonNullable<RECIPE_QUERY_RESULT>;

export default function RecipeDetail({
  recipe,
}: {
  recipe: RecipeDetailRecipe;
}) {
  const [scale, setScale] = useState(1);
  const ingredients = recipe.ingredients ?? [];
  const directions = recipe.directions ?? [];
  const title = recipe.title ?? "Untitled recipe";
  const description = recipe.description ?? "";

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {recipe.image && (
        <Image
          src={urlFor(recipe.image).width(1400).url()}
          alt={title}
          width={1400}
          height={900}
          className="mb-8 h-[500px] w-full rounded-3xl object-cover"
        />
      )}

      <h1 className="mb-4 text-5xl font-bold">{title}</h1>

      <p className="mb-10 text-lg text-muted-foreground">{description}</p>
 
<h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
  Serving Size
</h3>

<div className="mb-12 inline-flex rounded-full bg-zinc-100 p-1 shadow-lg">
  {[0.5, 1, 2, 3].map((value) => (
    <button
      key={value}
      type="button"
      onClick={() => setScale(value)}
      className="relative px-6 py-2 font-semibold"
    >
      {scale === value && (
  <motion.div
    layoutId="active-pill"
    className="absolute inset-0 rounded-full bg-amber-500/20 shadow-md"
    transition={{
      type: "spring",
      stiffness: 800,
      damping: 20,
    }}
  />
)}

      <span
  className={`relative z-10 transition-colors ${
    scale === value
      ? "text-amber-900 font-semibold"
      : "text-zinc-500"
  }`}
>
  {value}x
</span>
    </button>
  ))}
</div>

      <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>

      <ul className="mb-10 list-disc pl-6">
        {ingredients.map((ingredient) => {
          const quantity = ingredient.quantity ?? 0;

          return (
            <li key={ingredient._key}>
              {formatQuantity(quantity * scale)} {ingredient.unit}{" "}
              {ingredient.ingredient}
            </li>
          );
        })}
      </ul>

      <h2 className="mb-4 text-2xl font-bold">Directions</h2>

      <ol className="list-decimal pl-6">
        {directions.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
