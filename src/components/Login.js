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
import { useSelector } from "react-redux";
import { langConstant } from "../utils/strings";
const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState("");
  const lang = useSelector((store) => store.config.lang);

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
      <img src={BACKGROUND_IMAGE} alt="backgrund" className="w-screen" />
      <div className="bg-black absolute top-40 md:left-32 md:w-4/12 w-full md:mx-60 bg-opacity-80 rounded-sm p-4 mb-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-white text-2xl p-3 font-bold">
            {isSignIn
              ? langConstant[lang].signInLabel
              : langConstant[lang].signUpLabel}
          </h3>
          {!isSignIn ? (
            <div>
              <input
                type="text"
                className="w-11/12 m-4 p-3 text-white bg-gray-400 bg-opacity-50 rounded-sm"
                placeholder={langConstant[lang].namePlaceholder}
                ref={name}
              />
            </div>
          ) : null}
          <div>
            <input
              type="email"
              className="w-11/12 m-4 p-3 text-white bg-gray-400 bg-opacity-50 rounded-sm"
              placeholder={langConstant[lang].emailPlaceholder}
              ref={email}
            />
          </div>
          <input
            type="password"
            placeholder={langConstant[lang].passwordPlaceholder}
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
            {isSignIn
              ? langConstant[lang].signInLabel
              : langConstant[lang].signUpLabel}
          </button>

          <div className="text-gray-400 px-4 text-sm">
            {isSignIn
              ? langConstant[lang].newUser
              : langConstant[lang].exisitingUser}
            <span
              className="text-white underline cursor-pointer"
              onClick={() => onSignUpClick()}
            >
              {isSignIn
                ? langConstant[lang].signUpNow
                : langConstant[lang].signInLabel}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
