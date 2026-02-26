export const dynamic = "force-dynamic";

import { Suspense } from "react";
import GamesClient from "./GamesClient";

export default function GamesPage() {
  return (
    <div className="container-custom py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-10">All Games</h1>

      <Suspense fallback={<div>Loading games...</div>}>
        <GamesClient />
      </Suspense>
    </div>
  );
}
