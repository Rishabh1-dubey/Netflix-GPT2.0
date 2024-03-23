import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryConatainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={movies.TopRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.UpComingMovies} />

      </div>

      {/*
    MovieList - Popular
    MovieCards * n
    MovieList- Now Playing
    MovieList- Trending
    MovieList- Hrror
  */}
    </div>
  );
};

export default SecondaryConatainer;
