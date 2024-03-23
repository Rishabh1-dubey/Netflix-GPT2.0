import { signOut } from "firebase/auth";
import { useEffect } from "react";
import items from "../items/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSerachView } from "../utils/gptSlice"; 
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import lang from "../utils/languageConstants";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        //ab error hanppend
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    //toggle dispatch an action
    dispatch(toggleGptSerachView());
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when components is unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img className="w-44" src={items} alt="Netflix logo" />
      {user && (
        <div className="flex p-4 gap-1">
          <select className="  p-2 m-2 bg-gray-700 text-white rounded-lg ">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                className="pt-5"
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-2 mx-4 cursor-pointer text-white bg-yellow-500 rounded-md"
            onClick={handleGptSearch}
          >
            Search GPT
          </button>

          <img
            className="h-[45px] w-[46px]"
            src={user?.photoURL}
            alt="icon-logo"
          />
          <button className="text-white" onClick={handleSignout}>
            signOUt
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
