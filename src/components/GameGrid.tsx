import React, { useEffect, useState } from "react";
import useGames, { Platform } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

// import React, { useEffect, useState } from "react";
// import useGames, { Platform } from "../hooks/useGames";
// import { SimpleGrid, Text } from "@chakra-ui/react";
// import GameCard from "./GameCard";
// import GameCardSkeleton from "./GameCardSkeleton";
// import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenres";

// interface Props {
//   selectedGenre: Genre | null;
//   selectedPlatform: Platform | null;
// }

// const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
//   const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
//   const skeletons = [1, 2, 3, 4, 5, 6];

//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <SimpleGrid
//         columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
//         padding="10px"
//         spacing={3}
//       >
//         {isLoading &&
//           skeletons.map((skeleton) => (
//             <GameCardContainer key={skeleton}>
//               <GameCardSkeleton />
//             </GameCardContainer>
//           ))}
//         {data.map((game) => (
//           <GameCardContainer key={game.id}>
//             <GameCard game={game} />
//           </GameCardContainer>
//         ))}
//       </SimpleGrid>
//     </>
//   );
// };

// export default GameGrid;

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
