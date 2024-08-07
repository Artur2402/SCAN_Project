import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Signed from "./Signed/Signed";
import NotSigned from "./NotSigned/NotSigned";
import Menu from "./Menu/Menu";
import store from "../../store/store";

const Header = observer(() => {
  useEffect(() => {
    store.checkToken();
  }, []);

  return (
      <header className="header">
        <Link to="/">
          <img className="header-logo" src='/Logo/Header/scan-logo-header.svg' alt="logo" />
        </Link>
        <nav className="header-nav">
          <Link className="header-nav__link" to="/">
            Главная
          </Link>
          <a className="header-nav__link" href="#tariffs">
            Тарифы
          </a>
          <Link className="header-nav__link" to="/error">
            FAQ
          </Link>
        </nav>
        {store.token ? <Signed /> : <NotSigned />}
        <Menu />
      </header>
  );
});

export default Header;