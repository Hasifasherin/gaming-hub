import { games } from "../../data/games";
import GameCard from "../../components/games/GameCard";

export default function GamesPage() {
  return (
    <div className="container-custom py-24 p-[65px]">
      <h1 className="text-4xl font-bold mb-10">All Games</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}