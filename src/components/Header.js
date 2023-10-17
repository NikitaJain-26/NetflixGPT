import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { USER_AVATAR } from "../utils/constant";
const Header = () => {
  const user = useSelector((store) => store.user);
  const onSignOutClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <>
      <h1 className="w-full sticky top-0 bg-black `bg-gradient-to-b from-black flex justify-between ">
        <img src="/Netflix_Logo_PMS.png" alt="logo" className="w-40" />
        <div className="flex">
          {user == null ? (
            <Link to="/" className="text-white font-bold mr-6 mt-4">
              Sign In
            </Link>
          ) : (
            <div className="flex">
              <Link to="/browse" className="text-white mr-6 mt-4">
                Home
              </Link>
              <Link to="/" className="text-white mr-6 mt-4">
                TV Shows
              </Link>
              <Link to="/" className="text-white mr-6 mt-4">
                Movies
              </Link>
              <Link to="/" className="text-white mr-6 mt-4">
                New & Popular
              </Link>
              <img className="w-12 h-12 m-2 p-2" src={USER_AVATAR} alt="logo" />
              <button
                className="text-white mr-4 mt-0"
                onClick={() => onSignOutClick()}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </h1>
    </>
  );
};

export default Header;
