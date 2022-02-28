import MovieListItem from "./MovieListItem";

const movies =[...Array(12).keys()];

export default function MovieList() {
  console.log(movies);
  return (
    <>
      <div className="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">

        {movies.map((movie) => (
          movie
        ))}
        {movies.map((movie) => (
          <MovieListItem />
        ))}
      </div>
    </>
  );
}
