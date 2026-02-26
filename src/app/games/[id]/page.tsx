import { games } from "../../../data/games";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return games.map((game) => ({
    id: game.id,
  }));
}

interface PageProps {
  params: { id: string };
}

export default function GameDetailsPage({ params }: PageProps) {
  const game = games.find((g) => g.id === params.id);

  if (!game) return notFound();

  return (
    <div className="container-custom py-24 ">
      <h1 className="text-4xl font-bold mb-6">{game.title}</h1>

      <img
        src={game.image}
        alt={game.title}
        className="w-full max-w-4xl rounded-xl mb-6"
      />

      <p className="text-gray-400 mb-4">{game.description}</p>
      <span className="bg-purple-600 px-4 py-2 rounded-md text-sm">
        {game.category}
      </span>
    </div>
  );
}