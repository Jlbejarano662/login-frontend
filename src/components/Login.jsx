import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signIn } from "../service/api";

import "./Login.css"

import {BsFillEnvelopeFill, BsKeyFill} from "react-icons/bs"

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { email, password } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      const user = {
        email,
        password,
      };
      setLoading(true);
      const res = await signIn(user);
      if (res.data.token) {
        setMensaje("Loading...");
        setTimeout(() => {
          setMensaje("");
          localStorage.setItem("token", res.data.token);
          navigate(`/Home`);
        }, 1500);
      } else {
        const message = res.data.message;
        setMensaje(message);
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }
      setInputs({ email: "", password: "" });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-login">
        <h3>Welcome Back!</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="input-container">
            <div className="left">
              <input
                onChange={(e) => HandleChange(e)}
                value={email}
                name="email"
                id="email"
                type="email"
                placeholder="Email..."
                autoComplete="off"
              />
            </div>
            <BsFillEnvelopeFill/>
          </div>
          <div className="input-container">
            <div className="left">
              <input
                onChange={(e) => HandleChange(e)}
                value={password}
                name="password"
                id="password"
                type="password"
                placeholder="Password..."
                autoComplete="off"
              />
            </div>
            <BsKeyFill/>
          </div>
          <button type="submit">{loading ? "Loading..." : "Login"}</button>
        </form>
      </div>
      {mensaje && <div className="toast-login">{mensaje}</div>}
    </>
  );
};

export default Login;
