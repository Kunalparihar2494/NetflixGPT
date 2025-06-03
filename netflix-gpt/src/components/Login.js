import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { BG_URL } from "../utils/images";

const Login = () => {
  const [isSignForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInform = () => {
    setSignInForm(!isSignForm);
  };

  const handleButtonClick = () => {
    const msg = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if (msg) return;

    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="bg"
        />
      </div>
      <div className="w-3/12 absolute mt-[14rem] ml-[45rem] bg-black opacity-80">
        <span className="text-white relative top-8 left-[3rem] text-4xl font-bold">
          {isSignForm ? "Sign In" : "Sign Up"}
        </span>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-12 mt-4 flex flex-col"
        >
          {!isSignForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full border-blue-400 rounded-md bg-gray-500"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Mobile Number"
            className="p-4 my-4 w-full  border-blue-400 rounded-md  bg-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-md  bg-gray-500"
          />
          <p className="text-red-800 font-bold p-2 text-lg">{errorMessage}</p>
          <button
            className="p-3 my-4 w-full bg-red-500 rounded-md"
            onClick={handleButtonClick}
          >
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white mt-5 font-semibold cursor-pointer"
            onClick={toggleSignInform}
          >
            {isSignForm
              ? "New to Netflix? Sign up now"
              : "Already Registered? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
