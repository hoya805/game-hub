import React, { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

//moved to Custom hooks.
//   interface Game {
//     id: number;
//     name: string;
//   }

//   interface FetchGamesResponse {
//     count: number;
//     results: Game[];
//   }
//   const GameGrid = () => {

//     };

// const GameGrid = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClient
//       .get<FetchGamesResponse>("/games")
//       .then((res) => setGames(res.data.results))
//       .catch((err) => setError(err.message));
//   });
//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <ul>
//         {games.map((game) => (
//           <li key={game.id}>{game.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default GameGrid;
