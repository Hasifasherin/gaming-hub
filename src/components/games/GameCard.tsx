import Link from "next/link";
import { Game } from "../../types/game";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Link href="/pricing">
      <div
        className="relative rounded-xl p-[2px] 
        bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 
        shadow-[0_0_25px_rgba(59,130,246,0.6)]
        hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]
        transition duration-300"
      >
        {/* Actual Card */}
        <div
          className="bg-zinc-900 rounded-xl overflow-hidden 
          transition duration-300 hover:scale-105"
        >
          <img
            src={game.image}
            alt={game.title}
            className="h-60 w-full object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {game.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {game.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}