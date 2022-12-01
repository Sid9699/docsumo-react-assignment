import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ user, setUser }) => {
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
      setUser(res.body.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div>
        <Link to="/">
          <img
            src="https://app.docsumo.com/static/images/docsumo-logo.1a785f0ecf111285ae69.png"
            alt="docsumo"
          />
        </Link>
        <div className="form-container">
          <h1>Login to your Docsumo account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label for="email">Work Email</label>
              <input
                id="email"
                {...register("email", {
                  required: "Please enter a valid email address",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                id="password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
