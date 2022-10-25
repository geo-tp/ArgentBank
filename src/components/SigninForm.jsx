import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAttempt } from "../api/auth";
import { getAuth } from "../store/selectors/auth";

export const SigninForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAttempt(username, password));
  };

  if (auth.isConnected) {
    return <Navigate replace to="/user" />;
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
      {auth.isError && <p>{auth.isError}</p>}
    </form>
  );
};
