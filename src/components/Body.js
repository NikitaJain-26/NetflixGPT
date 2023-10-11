import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";
const Body = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
