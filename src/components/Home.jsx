import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getHome } from "../service/api";

import "./Home.css";

const Home = () => {
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const signOff = (ruta) => {
    localStorage.removeItem("token");
    navigate(ruta);
  };

  async function fetchData(token) {
    if (token) {
      const res = await getHome(token);
      setMessage(res.data);
    }
  }

  useEffect(() => {
    fetchData(token);
  }, [token]);

  return (
    <div className="home">
      <h3>{message ? `${message}` : "What are you doing?? 🕵️‍♂️"}</h3>
      <h2>
        {message
          ? "You were able to log in correctly 🎉"
          : "we are watching you..."}
      </h2>
      <button onClick={() => signOff("/")}>Login</button>
    </div>
  );
};

export default Home;
