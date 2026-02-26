import Hero from "../components/home/Hero";
import FeaturedGames from "../components/home/FeaturedGames";

export default function HomePage() {
  return (
    <main className="text-white min-h-screen">
      <Hero />
      <FeaturedGames />
    </main>
  );
}