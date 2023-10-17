import { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMAGE } from "../utils/constant";
const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState("");

  const onSignUpClick = () => {
    setIsSignIn(!isSignIn);
  };

  const onSignInClick = () => {
    const error = isSignIn
      ? validate("", email.current.value, password.current.value, isSignIn)
      : validate(
          name.current.value,
          email.current.value,
          password.current.value,
          isSignIn
        );
    if (error !== null) return setError(error);
    setError("");
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setError(error.code + "-" + error.message);
            });
        })
        .catch((error) => {
          setError(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          setError(error.code + "-" + error.message);
        });
    }
  };

  return (
    <div className="">
      <img src={BACKGROUND_IMAGE} alt="backgrund" />
      <div className="bg-black absolute top-40 left-32 w-4/12 mx-60 bg-opacity-80 rounded-sm p-4 mb-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-white text-2xl p-3 font-bold">Sign In</h3>
          {!isSignIn ? (
            <div>
              <input
                type="text"
                className="w-11/12 m-4 p-3 text-white bg-gray-400 bg-opacity-50 rounded-sm"
                placeholder="Name"
                ref={name}
              />
            </div>
          ) : null}
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
            <div className="text-red-600 text-sm px-4">{error}</div>
          ) : null}
          <button
            className="w-11/12 bg-red-600 p-3 m-4 text-white rounded-lg font-bold"
            onClick={() => onSignInClick()}
          >
            {isSignIn ? "Sign In" : "Sign up"}
          </button>

          <div className="text-gray-400 px-4 text-sm">
            {isSignIn ? "New to Netflix?" : "Already a user"}
            <span
              className="text-white underline cursor-pointer"
              onClick={() => onSignUpClick()}
            >
              {isSignIn ? "Sign up now" : "Sign In"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
