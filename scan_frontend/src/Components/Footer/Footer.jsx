import React from "react";
import "./Footer.css";

function Footer() {
  return (
      <footer className="footer">
        <img src='/Logo/Header/scan-logo-footer.svg' alt="" />
        <div>
          <p className="footer-info">
            г. Москва, Цветной б-р, 40 <br />
            <a className="footer-info" href="tel:+74957712111">
              +7 495 771 21 11
            </a>
            <br />
            <a className="footer-info" href="mailto: info@skan.ru">
              info@skan.ru
            </a>
          </p>
          <p className="footer-info">Copyright. 2023</p>
        </div>
      </footer>
  );
}

export default Footer;