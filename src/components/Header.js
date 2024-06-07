import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { adduser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptShow = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          adduser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img alt="logo" className="w-44 " src={NETFLIX_LOGO} />
      {user && (
        <div className="flex p-4">
          {gptShow && (
            <select className="p-2 my-2" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((item) => (
                <option value={item?.val} key={item?.val}>
                  {item.lang}
                </option>
              ))}
            </select>
          )}
          <button
            type="button"
            className="bg-red-600 text-white rounded-lg px-4 mx-2 my-2 py-2"
            onClick={handleGPTSearch}
          >
            {gptShow ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12 " src={user?.photoURL} alt="user-logo" />
          <button
            type="button"
            className="font-bold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
