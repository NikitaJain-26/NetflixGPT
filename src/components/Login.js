import { useRef, useState } from "react";
import { validate } from "../utils/validate";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState("");
  const onSignInClick = () => {
    if (
      validate(email.current.value, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) == null
    ) {
      return setError("Please enter valid email");
    }
    if (
      validate(
        password.current.value,
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      ) == null
    ) {
      return setError(
        "Your password must contain between 4 and 60 characters."
      );
    } else {
      setError("");
    }
  };

  return (
    <div className="">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="backgrund"
      />
      <div className="bg-black absolute top-40 left-32 w-4/12 mx-60 bg-opacity-80 rounded-sm p-4 mb-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-white text-2xl p-3 font-bold">Sign In</h3>
          <div>
            <input
              type="email"
              className="w-11/12 m-4 p-3 text-white bg-gray-400 bg-opacity-50 rounded-sm"
              placeholder="Email"
              ref={email}
            />
          </div>
          <input
            type="password"
            placeholder="Password"
            ref={password}
            className="w-11/12 m-4 p-3 text-white bg-gray-400 bg-opacity-50 rounded-sm"
          />
          {error != "" ? (
            <div className="text-red-600 text-sm">{error}</div>
          ) : null}
          <button
            className="w-11/12 bg-red-600 p-3 m-4 text-white rounded-lg font-bold"
            onClick={() => onSignInClick()}
          >
            Sign In
          </button>

          <div className="text-gray-400 px-4 text-sm">
            New to Netflix?
            <span className="text-white underline cursor-pointer">
              Sign up now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
