import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatainer from "./SecondaryConatainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

const Browser = () => {
  //creating a new custom hooks and inpoert in as useNowPlayingMovies
  useNowPlayingMovies();
  usePopularMovie();
  useTopRated();
 useUpcomingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConatainer />
    </div>
  );
};

export default Browser;
