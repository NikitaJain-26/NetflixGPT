import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { USER_AVATAR } from "../utils/constant";
import { toggleGptSearch } from "../utils/redux/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const onSignOutClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const isGptSearch = useSelector((store) => store.gptSearch?.gptSearch);
  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearch());
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
              <button
                className="px-4 py-2 mr-6 mt-3 mb-5 text-white bg-red-800 rounded-md"
                onClick={handleToggleGptSearch}
              >
                {isGptSearch ? "Home Page" : "GPT Search"}
              </button>
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
