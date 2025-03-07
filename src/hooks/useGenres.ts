import genres from "../data/genres";
// import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string

}

const useGenres = () => ({data:genres, isLoading: false, error: null})
// const useGenres = () => useData<Genre>('/genres')

export default useGenres 

// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

// interface FetchGamesResponse{
//     count: number;
//     results: Genre[];
// }
// const useGenres = ()=> {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
    
//     useEffect(() => {

//         const contoller = new AbortController();

//         setLoading(true);
//         apiClient
//         .get<FetchGamesResponse>("/genres",{ signal: contoller.signal })
//         .then((res) => {
//             setGenres(res.data.results)
//             setLoading(false);
//         })
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setError(err.message);
//             setLoading(false);
//         });
           
              
//           return () => contoller.abort();
//         }, []);
    
//     return {genres, error, isLoading};
// }

// export default useGenres;