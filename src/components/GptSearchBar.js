import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[12%] flex justify-center">
      <form className="w-1/2 bg-black grid  grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-6 col-span-9"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="col-span-3 m-6 py-4 px-4 mr-8 bg-red-500 text-white rounded-lg">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
