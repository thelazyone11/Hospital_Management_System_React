import { useState, useContext } from "react";
import React from "react";
import "./loginPage.css";
import Axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { baseUrl } from "../../const/const.js";

import { UserContext } from "../../Provider/user_provider";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [userData, setUserData] = useContext(UserContext);

  const token = localStorage.getItem("token");

  if (token != null) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    validateWithEnd();
  };

  function validateWithEnd() {
    //Api
    const json = JSON.stringify({ username: email, password: password });
    Axios.post(`${baseUrl}/token`, json, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.data === "Invalid User") {
        //show alert
        alert(`Invalid Credentials.`);
      } else {
        var obj = JSON.parse(JSON.stringify(response.data));
        console.log(obj.token);
        localStorage.setItem("token", obj.token);
        fetchUserData(obj.token);
        nav("/");
      }
    });
  }

  function fetchUserData(token) {
    console.log(`token from fun ${token}`);

    Axios.get(`${baseUrl}/user-detail`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      var obj = JSON.parse(JSON.stringify(response.data));
      setUserData(obj);
    });
  }

  return (
    <div className="Lbody">
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">login</button>
          </form>
        </div>
      </div>
    </div>

    // <div className="page">
    //   <div className="container">
    //     <div className="left">
    //       <div className="login">Login</div>
    //       <div className="eula">
    //         By logging in you agree to the ridiculously long terms that you
    //         didn't bother to read
    //       </div>
    //     </div>
    //     <div className="right">
    //       <svg viewBox="0 0 320 300">
    //         <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
    //       </svg>
    //       <div className="form">
    //         <form onSubmit={handleSubmit}>
    //           <label htmlFor="email">Email</label>
    //           <input
    //             type="email"
    //             id="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //           <label htmlFor="password">Password</label>
    //           <input
    //             type="password"
    //             id="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //           <input type="submit" id="submit" value="Submit" />
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LoginPage;
