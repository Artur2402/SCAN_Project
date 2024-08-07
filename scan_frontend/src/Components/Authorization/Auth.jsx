import React from "react";
import "./Auth.css";
import Form from "./Form/Form";

function Authorization() {
  return (
      <div className="authorization">
        <h2 className="auth__title">
          Для оформления подписки <br /> на тариф, необходимо авторизоваться.
        </h2>
        <img className="auth-img" src='/Logo/Auth/key.svg' alt="key" />
        <Form />
      </div>
  );
}

export default Authorization;