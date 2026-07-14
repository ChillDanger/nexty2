"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import type { RECIPES_QUERY_RESULT } from "@/sanity.types";

type RecipeCardProps = {
  recipe: NonNullable<RECIPES_QUERY_RESULT>[number];
};

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug?.current}`}>
      <CardContainer className="inter-var mx-auto max-w-lg cursor-pointer">
       <CardBody
  className="
    group/card
    relative
    w-full
    min-h-[500px]
    rounded-3xl
    border
    border-border/50
    bg-card
    p-8
    shadow-lg
  "
>
          <CardItem
            translateZ="40"
            className="
              mb-4
              inline-block
              rounded-full
              bg-amber-500/15
              px-3
              py-1
              text-xs
              font-semibold
              text-amber-700
            "
          >
            Recipe
          </CardItem>

          <CardItem
            translateZ="60"
            className="text-2xl font-bold"
          >
            {recipe.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ="70"
            className="mt-2 text-sm text-muted-foreground"
          >
            {recipe.description}
          </CardItem>

          {recipe.image && (
            <CardItem
              translateZ="100"
              className="mt-5 w-full overflow-hidden rounded-xl"
            >
              <Image
                src={urlFor(recipe.image).width(800).url()}
                alt={recipe.title ?? "Recipe"}
                width={800}
                height={500}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
            </CardItem>
          )}

          <div className="mt-6 flex items-center justify-between">
            <CardItem
              translateZ={30}
              className="
                rounded-full
                bg-black
                px-4
                py-2
                text-sm
                font-semibold
                text-white
              "
            >
              View Recipe →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
}