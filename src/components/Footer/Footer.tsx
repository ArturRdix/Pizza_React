import "./Footer.scss";
import { FaInstagram, FaPhoneAlt,FaRegClock  } from "react-icons/fa";import { RiContactsBook3Line } from "react-icons/ri";

import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__content">
        <div className="footer__block footer__block--address">
          <h2 className="footer__title">Адрес<FaLocationDot/></h2>
          <address className="footer__text">
            ул. Примерная, 123,
            <br />
            г. Пример, 45678
          </address>
        </div>
        <div className="footer__block footer__block--hours">
          <h2 className="footer__title">Часы работы<FaRegClock/></h2>
          <p className="footer__text">
            Пн-Пт: 9:00 - 18:00
            <br />
            Сб-Вс: Закрыто
          </p>
        </div>
        <div className="footer__block footer__block--contacts">
          <h2 className="footer__title">Контакты<RiContactsBook3Line/></h2>
          <p className="footer__text">
            <a href="tel:+380912345678">
              <FaPhoneAlt />
              (099) 345-67-89
            </a>
            <a href="">
              <FaInstagram />
              Inst_agram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
