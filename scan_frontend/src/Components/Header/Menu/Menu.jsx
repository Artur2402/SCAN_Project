import React, { useEffect, useState } from "react";
import "./Menu.css";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import store from "../../../store/store";

const Menu = observer(() => {
  const [isActive, setActive] = useState(false);

  const login = localStorage.getItem("login");

  useEffect(() => {
    store.checkToken();
    store.getCompaniesInfo();
  }, []);

  return (
      <div className="burger-button__open" onClick={() => setActive(true)}>
        {isActive ? (
            <div className="burger-menu">
              <div className="burger-top">
                <img className="burger-logo" src='/Logo/Header/scan-logo-footer.svg' alt="" />
                <button
                    className="burger-button__close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(false);
                    }}
                ></button>
              </div>
              <nav className="burger-nav">
                <Link className="burger-nav__link" to="/">
                  Главная
                </Link>
                <a className="burger-nav__link" href="#tariffs">
                  Тарифы
                </a>
                <Link className="burger-nav__link" to="/error">
                  FAQ
                </Link>
              </nav>
              {store.token ? (
                  <div className="burger__user-info">
                    <span className="burger__username">{login}</span>
                    <img
                        className="burger__user-avatar"
                        src='/Logo/Header/user-icon-mobile.svg'
                        alt="user avatar"
                    />
                    <button
                        className="burger__logout"
                        onClick={() => {
                          store.setToken("");
                          localStorage.clear();
                        }}
                    >
                      <Link to="/">Выйти</Link>
                    </button>
                  </div>
              ) : (
                  <div className="burger__not-signed">
                    <Link className="burger__sign-up" to="/error">
                      Зарегистрироваться
                    </Link>
                    <Link className="burger__sign-in" to="/auth">
                      Войти
                    </Link>
                  </div>
              )}
            </div>
        ) : (
            <></>
        )}
      </div>
  );
});

export default Menu;