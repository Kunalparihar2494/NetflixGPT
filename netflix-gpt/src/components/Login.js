import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setSignInForm] = useState(true);

  const toggleSignInform = () => {
    setSignInForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="bg"
        />
      </div>
      <div className="w-3/12 absolute mt-[14rem] ml-[45rem] bg-black opacity-80">
        <span className="text-white relative top-8 left-[3rem] text-4xl font-bold">
          {isSignForm ? "Sign In" : "Sign Up"}
        </span>
        <form className="p-12 mt-4 flex flex-col">
          {!isSignForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className="p-4 my-4 w-full rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-md"
          />
          <button className="p-3 my-4 w-full bg-red-500 rounded-md">
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
