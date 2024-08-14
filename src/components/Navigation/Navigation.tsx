import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav container">
      <div className="nav--list">
        <NavLink to="/" className="nav--list--item">
          Пицца
        </NavLink>
        <NavLink to="/sushi" className="nav--list--item">
          Суши
        </NavLink>
        <NavLink to="/burger" className="nav--list--item">
          Бургеры
        </NavLink>
      </div>
      <div className="nav--sort">Сортировать по sssss</div>
    </nav>
  );
};

export default Navigation;
