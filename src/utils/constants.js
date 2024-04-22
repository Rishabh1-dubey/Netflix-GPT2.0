export const NETFLIX_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "english" },
  { identifier: "hindi", name: "hindi" },
  { identifier: "marathi", name: "marathi" },
];
// export const BARD_KEY="AIzaSyBcW-ueM8asZJRrNSDpdMSqDkA99FGKRis"
export const BARD_KEY=process.env.REACT_APP_BARD_KEY
console.log(process.env.REACT_APP_TMDB_API) 
console.log("Bearer"+process.env.REACT_APP_TMDB_KEY)
