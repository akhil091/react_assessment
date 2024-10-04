import { useState, useEffect } from "react";

export default function Signup({ setIsSignUp, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  return (
    <div className="signup-container">
      <h2>Sign up</h2>
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
      <button onClick={handleSignup}> Signup </button>

      <p>
        have an account?
        <span onClick={() => setIsSignUp(false)}>Login</span>
      </p>
    </div>
  );
}
