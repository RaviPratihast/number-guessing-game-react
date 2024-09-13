import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { stateAuth, dispatchAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin() {
    const isUserPresent = stateAuth.users.find(
      (registeredUser) =>
        registeredUser.user === user && registeredUser.password === password
    );
    if (isUserPresent) {
      dispatchAuth({ type: "USER_LOGGED_IN", payload: { loggedIn: true } });
      const defaultPathName = "/";
      navigate(location?.state?.from?.pathname || defaultPathName, {
        replace: true,
      });
    }
  }
  function handleGuestLogin() {
    dispatchAuth({ type: "GUEST_USER_LOGGED_IN", payload: { loggedIn: true } });
    const defaultPathName = "/";
    navigate(location?.state?.from?.pathname || defaultPathName, {
      replace: true,
    });
  }
  return (
    <>
      <h1 className="heading-text">Number Guessing Game</h1>
      <div className="login-container">
        <h2>Log In</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={({ target }) => setUser(target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="input-btn-container">
          <button className="btn-login" onClick={handleLogin}>
            Login
          </button>
          <button className="btn-login" onClick={handleGuestLogin}>
            Guest Login
          </button>
          {/* <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleGuestLogin}>Guest Login</Button> */}
        </div>
      </div>
    </>
  );
};

export default Login;
