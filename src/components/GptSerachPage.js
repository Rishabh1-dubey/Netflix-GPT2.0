import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 w-full h-full">
    {/*--------- background image ------------------------------------------ */}
   <img className="md:h-[600px] sm:h-[600px] h-screen lg:h-[700px]  w-full object-cover" src ={BG_URL} alt="bg" />
 </div>
      
      
      {/* GptSearch bar */}
      <GptSearchBar/>
      {/* GptMovieSuggestion */}
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
