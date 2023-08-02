import { Category } from "@/models/category";
import sanityClient from "./sanity";

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
