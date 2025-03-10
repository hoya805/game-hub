//Building Custom hooks

import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform} [];  //design smell because of another plaftform inside of parent platforms
    metacritic: number;
    rating_top: number; //whole number
  }
  

const useGames = (gameQuery: GameQuery) => 
  useData<Game>('/games',{
    params:{
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }},
    [ gameQuery]
  );

export default useGames;


// import useData from "./useData";
// import { Genre } from "./useGenres";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// export interface Game {
//     id: number;
//     name: string;
//     background_image: string;
//     parent_platforms: { platform: Platform} [];  //design smell because of another plaftform inside of parent platforms
//     metacritic: number
//   }
  

// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
//   useData<Game>('/games',{
//     params:{
//       genres: selectedGenre?.id, 
//       platforms: selectedPlatform?.id
//     }},
//     [ selectedGenre?.id, selectedPlatform?.id]
//   );

// export default useGames;





// //Building Custom hooks
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";


// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// export interface Game {
//     id: number;
//     name: string;
//     background_image: string;
//     parent_platforms: { platform: Platform} [];  //design smell because of another plaftform inside of parent platforms
//     metacritic: number
//   }
  
//   interface FetchGamesResponse {
//     count: number;
//     results: Game[];
//   }

// const useGames = () => {
  
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
  
//     useEffect(() => {

//       const contoller = new AbortController();

//       setLoading(true);
//       apiClient
//         .get<FetchGamesResponse>("/games",{ signal: contoller.signal })
//         .then((res) => {
//           setGames(res.data.results)
//           setLoading(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//           setLoading(false);
//         });
       
          
//       return () => contoller.abort();
//     }, []);

//     return {games, error, isLoading};
     
  
// }

// export default useGames
