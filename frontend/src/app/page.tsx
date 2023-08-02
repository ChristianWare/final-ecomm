import HeroSection from "@/components/HeroSection/HeroSection";
import { getCategories } from "@/libs/apis";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const categories = await getCategories();

  console.log(categories);

  return (
    <main>
      <HeroSection showLink />
      <h3 className='text-4xl text-white mb-10'>Category Section</h3>
      {categories.map((category) => (
        <Link
          href={`games/${category.slug.current}`}
          key={category._id}
          className='mb-5'
        >
          <Image
            src={category.image}
            alt={category.name}
            width={200}
            height={200}
            className='mb-5'
          />
          <p className='text-3xl text-white'>{category.name}</p>
        </Link>
      ))}
    </main>
  );
}
