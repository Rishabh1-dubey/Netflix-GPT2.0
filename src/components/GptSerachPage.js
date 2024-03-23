import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
    {/*--------- background image ------------------------------------------ */}
   <img src ={BG_URL} alt="bg" />
 </div>
      
      
      {/* GptSearch bar */}
      <GptSearchBar/>
      {/* GptMovieSuggestion */}
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch