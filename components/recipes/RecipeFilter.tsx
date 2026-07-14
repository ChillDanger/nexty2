"use client";

import { useState } from "react";
import type { RECIPES_QUERY_RESULT } from "@/sanity.types";
import RecipeCard from "./RecipeCard";
import { Search, X } from "lucide-react";


type Recipe = NonNullable<RECIPES_QUERY_RESULT>[number];

const CATEGORY_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Dessert", value: "dessert" },
  { label: "Snack", value: "snack" },
  { label: "Drink", value: "drink" },
] as const;

type CategoryValue = (typeof CATEGORY_OPTIONS)[number]["value"];

function getRecipeCategory(recipe: Recipe): CategoryValue | null {
  return recipe.category ?? null;
}

export default function RecipeFilter({
  recipes,
}: {
  recipes: NonNullable<RECIPES_QUERY_RESULT>;
}) {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");

  const [searchTerm, setSearchTerm] = useState("");

 const filteredRecipes = recipes.filter((recipe) => {
  const matchesCategory =
    activeCategory === "all" ||
    getRecipeCategory(recipe) === activeCategory;

  const search = searchTerm.toLowerCase();

  const matchesSearch =
    recipe.title?.toLowerCase().includes(search) ||
    recipe.description?.toLowerCase().includes(search);

  return matchesCategory && matchesSearch;
});

 return (
  <div className="space-y-10">

    <div className="mx-auto max-w-xl">
       
     <div className="relative">
     <Search
  className="
    absolute
    left-4
    top-1/2
    h-5
    w-5
    -translate-y-1/2
    text-muted-foreground
  "
/>
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="
        w-full
        rounded-full
        border
        border-border
        bg-background
        py-3
        pl-12
        pr-12
        text-sm
        shadow-sm
        transition-all
        duration-300
        outline-none
        focus:border-amber-500
        focus:ring-2
        focus:ring-amber-500/20
      "
    />
  </div>
</div>
    {/* Category Filter */}
    <div className="flex justify-center">
      <fieldset className="inline-flex max-w-full flex-wrap gap-2 rounded-full border border-border/70 bg-zinc-950/5 p-2 shadow-sm backdrop-blur dark:bg-zinc-100/5">
        <legend className="sr-only">
          Filter recipes by category
        </legend>

        {CATEGORY_OPTIONS.map((category) => {
          const isActive =
            activeCategory === category.value;

          return (
            <button
              key={category.value}
              type="button"
              aria-pressed={isActive}
              onClick={() =>
                setActiveCategory(category.value)
              }
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                "outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white dark:bg-zinc-200 dark:text-zinc-700 dark:hover:bg-zinc-300 dark:hover:text-zinc-950",
              ].join(" ")}
            >
              {category.label}
            </button>
          );
        })}
      </fieldset>
    </div>

    {/* Results */}
    <div className="min-h-[650px]">
      {filteredRecipes.length ? (
        <div className="grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-[500px] flex-col items-center justify-center text-center">
          <div className="mb-4 text-6xl">
            🍳
          </div>

          <h3 className="text-2xl font-semibold">
            No recipes found
          </h3>

          <p className="mt-2 max-w-sm text-muted-foreground">
            There aren't any recipes in this
            category yet. Try another category
            or check back soon!
          </p>
        </div>
      )}
    </div>
  </div>
);
}
