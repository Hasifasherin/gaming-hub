"use client";

import { useState } from "react";
import { games } from "../../data/games";
import GameCard from "../../components/games/GameCard";

export default function FeaturedGames() {
  const [showAll, setShowAll] = useState(false);

  const visibleGames = showAll ? games : games.slice(0, 6);

  return (
    <section className="py-24 container-custom">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Featured Games
      </h2>

      <div className="grid md:grid-cols-3 gap-8 p-[65px]">
        {visibleGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {games.length > 6 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}