import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <Link to="/">
          <img
            src="https://app.docsumo.com/static/images/docsumo-logo.1a785f0ecf111285ae69.png"
            alt="docsumo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Login;
