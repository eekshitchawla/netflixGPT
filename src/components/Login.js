import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const pass = useRef(null);

  const handleButtonClick = (email, pass) => {
    console.log(email);
    console.log(pass);
    const isDataValid = validateData(email.current.value, pass.current.value);
    console.log(isDataValid);
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 mx-auto w-3/12 text-center bg-black bg-opacity-80 p-12 left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl p-2 text-left">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full rounded-lg bg-gray-800"
          />
        ) : null}
        <input
          ref={email}
          type="email"
          placeholder="E-Mail"
          className="p-2 m-2 w-full rounded-lg bg-gray-800"
        />
        <input
          ref={pass}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded-lg bg-gray-800"
        />
        <button
          className="p-2 m-2 w-full bg-red-700 rounded-lg"
          onClick={() => handleButtonClick(email, pass)}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 text-left cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? "New to Netflix?  Sign Up" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
