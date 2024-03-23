import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies, addUpComingMovies } from "../utils/movieSlice";

const useUpcomingMovie = () => {

//Fetch Data from  TMDB API and update storee

  //addmovie slice in json.result for we have to perform dispatch and action
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
 
  }, []);
};


export  default useUpcomingMovie ;