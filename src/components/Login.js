import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/Validate";
import { auth } from "../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { BG_IMG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toogleSignInForm = () => {
    console.log("hhg");
    setIsSignInForm(!isSignIn);
  };

  const validate = () => {
    const message = ValidateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                  displayName: displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="bg-img" src={BG_IMG} />
      </div>
      <form className="text-white bg-opacity-75 absolute my-36 bg-black w-3/12 mx-auto right-0 left-0 py-6 px-8">
        <h1 className="font-bold text-3xl my-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-md"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        ></input>
        <button
          type="button"
          className="rounded-md p-2 my-2 w-full bg-red-700"
          onClick={validate}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <p
          className="font-bold py-4 my-2 text-sm cursor-pointer"
          onClick={toogleSignInForm}
        >
          {isSignIn ? "New to Netflix? Sign up now" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
