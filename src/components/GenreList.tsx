import useGenres from "../hooks/useGenres";

//using generic custom hook useData
const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

// const GenreList = () => {
//   const { genres } = useGenres();
//   return (
//     <ul>
//       {genres.map((genre) => (
//         <li key={genre.id}>{genre.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default GenreList;
