"use client";

import { useSearchParams } from "next/navigation";
import { games } from "../../data/games";
import GameCard from "../../components/games/GameCard";

export default function GamesClient() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center text-red-500 text-xl font-semibold">
          Game Not Found ❌
        </div>
      )}
    </>
  );
}