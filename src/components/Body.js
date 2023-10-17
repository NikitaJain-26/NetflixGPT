import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ displayName: displayName, email: email, uid: uid }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
