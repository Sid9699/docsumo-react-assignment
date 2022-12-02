import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ user, updateUser }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const onSubmit = async (values) => {
    try {
      const res = await fetch(
        "https://apptesting.docsumo.com/api/v1/eevee/login/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await res.json();
      updateUser(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div>
        <Link to="/" className="logo">
          <img
            src="https://app.docsumo.com/static/images/docsumo-logo.1a785f0ecf111285ae69.png"
            alt="docsumo"
          />
        </Link>
        <div className="form-container">
          <h1>Login to your Docsumo account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <div>
                <input
                  id="email"
                  placeholder="janedoe@abc.com"
                  autoFocus
                  {...register("email", {
                    required: "Please enter a valid email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                placeholder="Enter password here..."
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <div className="align-right">
              <Link to="/login">Forgot Password?</Link>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="sign-up-message">
            Don't have an account? &nbsp;<Link to="/login">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
