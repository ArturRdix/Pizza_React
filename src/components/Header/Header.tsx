import cartModalActive from "../../store/cart-modal-active";
import CartButton from "../UI/CartButton/CartButton";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header container">
      <div className="header--logo-block">
        <img className="header--logo-block--img" src="/img/logo.svg" alt="logo" />
        <div className="header--logo-block--name-text">
          <h1>PIZZA</h1>
          <p>самая вкусная пицца в мире</p>
        </div>
      </div>
      <div className="header--cart-block" onClick={() => cartModalActive.openModal()}>
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
