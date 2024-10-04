import { useState, useEffect, createContext, useContext } from "react";

export default function Login({ setIsSignUp, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = localStorage.getItem("user");

    if (user && user.email === email && user.password === password) {
      setIsLoggedIn(true);
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}> Login </button>

      <p>
        don't have account?
        <span onClick={() => setIsSignUp(true)}>Signup</span>
      </p>
    </div>
  );
}
