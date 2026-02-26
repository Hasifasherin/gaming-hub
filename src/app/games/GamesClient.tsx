'use client';

import { games } from "../../data/games";
import GameCard from "../../components/games/GameCard";

export default function GamesClient() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}