import HeroSection from "@/components/HeroSection/HeroSection";
import { getCategories, getGames } from "@/libs/apis";
import Link from "next/link";
import Image from "next/image";
import GameCard from "@/components/GameCard/GameCard";

export default async function Home() {
  const categories = await getCategories();
  const games = await getGames();

  // the follwing two below return an array, so you would just map through them like you did with "games"
  const isTrendingGames = games?.filter((game) => game.isTrending);
  const isFeaturedGame = games?.find((game) => game.isFeatured);

  return (
    <main>
      <HeroSection showLink />
      <h3 className='text-4xl text-white mb-10'>Category Section</h3>
      <div className='flex items-center justify-center gap-10'>
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/categories/${category.slug.current}`}
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
      </div>
      <div className='flex gap-8 flex-wrap mt-8'>
        {games.map((game) => (
          <GameCard
            key={game._id}
            gameName={game.name}
            imageUrl={game.images[0].url}
            slug={game.slug.current}
            price={game.price}
          />
        ))}
      </div>
    </main>
  );
}
