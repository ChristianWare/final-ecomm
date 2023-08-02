import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Game } from "@/models/game";

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] {
    _id,
    name,
    slug {current},
    image,
    subtitle
  }`;

  const catgories: Category[] = await sanityClient.fetch({ query });

  return catgories;
};

export const getGames = async (): Promise<Game[]> => {
  const query = `*[_type == "game"] {
    name,
    price,
    images,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref][0] {
      name,
      slug {
        current
      }
    },
    slug,
    quantity,
    description
  }`;

  const games: Game[] = await sanityClient.fetch({ query });

  return games;
};
