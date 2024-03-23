import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // ye tera movie app store se aa rha

  // if (!movies ) return;
  if (movies == null) return;
  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview,id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      {/* <VideoTitle /> */}
      <BackgroundVideo  movieId={id}/>
    </div>
  );
};

export default MainContainer;
