import RecipeGrid from "@/components/recipes/RecipeGrid";

export default function RecipesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-12 text-center text-5xl font-bold">
        Recipes
      </h1>

      <RecipeGrid />
    </main>
  );
}