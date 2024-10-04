import "./styles.css";
import { useState, useEffect, createContext, useContext } from "react";
import Login from "./Login";
import Signup from "./Signup";
import BoxContainer from "./BoxContainer";

const ThemeContext = createContext();

export const useTheme = () => {
  useContext(ThemeContext);
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  //const [theme, setTheme] = useState("light");

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user, "user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <ThemeContext.Provider>
      <div >
        {!isLoggedIn ? (
          isSignUp ? (
            <Signup setIsSignUp={setIsSignUp} setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Login setIsSignUp={setIsSignUp} setIsLoggedIn={setIsLoggedIn} />
          )
        ) : (
          <>
            <button onClick={handleLogout}>Logout</button>
            <BoxContainer />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}
