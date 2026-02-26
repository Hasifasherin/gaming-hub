"use client";

import { games } from "../../data/games";
import GameCard from "../../components/games/GameCard";
import { useSearchParams } from "next/navigation";

export default function GamesPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-custom pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-10">
        All Games
      </h1>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center text-red-500 text-lg sm:text-xl font-semibold mt-10">
          Game Not Found ❌
        </div>
      )}
    </div>
  );
}