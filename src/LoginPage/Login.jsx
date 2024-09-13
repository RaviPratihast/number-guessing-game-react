import { useState } from "react";

import "./login.css";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log(user, password);
  }
  return (
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
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleGuestLogin}>Guest Login</button> */}
      </div>
    </div>
  );
};

export default Login;
