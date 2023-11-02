import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { USER_AVATAR } from "../utils/constant";
import { toggleGptSearch } from "../utils/redux/gptSlice";
import { langConstant, languageOption } from "../utils/strings";
import { updateLanguage } from "../utils/redux/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);
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

  const onlanguagechange = (e) => {
    dispatch(updateLanguage(e.target.value));
  };
  return (
    <>
      <h1 className="w-full md:sticky md:top-0 bg-black `bg-gradient-to-b from-black flex mx-auto md:flex-row justify-between ">
        <img src="/Netflix_Logo_PMS.png" alt="logo" className="w-40" />
        <div className="flex justify-center">
          <select
            onChange={(e) => onlanguagechange(e)}
            className="md:px-4 md:py-2 mr-6 md:mt-3 md:mb-5 my-6 px-2 py-1 text-white bg-red-800 rounded-md"
          >
            {languageOption.map((lang) => (
              <option value={lang.value}>{lang.title}</option>
            ))}
          </select>
          {user == null ? (
            <Link to="/" className="text-white font-bold mr-6 mt-6">
              {langConstant[lang].signInLabel}
            </Link>
          ) : (
            <div className="flex">
              <button
                className="md:px-4 md:py-2 mr-6 md:mt-3 md:mb-5 my-7 px-1 text-white bg-red-800 rounded-md"
                onClick={handleToggleGptSearch}
              >
                {isGptSearch
                  ? langConstant[lang].homePageLabel
                  : langConstant[lang].gptSearch}
              </button>
              <img
                className="hidden md:inline-block w-12 h-12 m-2 p-2"
                src={USER_AVATAR}
                alt="logo"
              />
              <button
                className="text-white mr-4 mt-0"
                onClick={() => onSignOutClick()}
              >
                {langConstant[lang].signOutLabel}
              </button>
            </div>
          )}
        </div>
      </h1>
    </>
  );
};

export default Header;
