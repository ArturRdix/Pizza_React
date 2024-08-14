import { Outlet } from "react-router-dom";
import Cart from "./Cart/Cart";
import CurrentItemModal from "./CurrentItemModal/CurrentItemModal";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Cart />
      <CurrentItemModal />
      <div className="wrapper">
        <Header />
        <Navigation />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
