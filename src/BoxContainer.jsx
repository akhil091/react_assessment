import { useState } from "react";
import Box from "./Box";
import { useTheme } from "./App";

export default function BoxContainer() {
  const [view, setView] = useState("grid");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setView((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleView = () => {
    setTheme((prev) => (prev === "grid" ? "list" : "grid"));
  };

  const boxes = [1, 2, 3, 4, 5, 6];

  return (
    <div className={`${theme}`}>
      <div className="toggle-theme">
        <button onClick={toggleTheme}>
          Toggle {theme === "light" ? "dark" : "light"}
        </button>
        <button onClick={toggleView}>
          Switch to {view === "grid" ? "list" : "grid"}
        </button>
      </div>
      <div className={`${view}`}>
        {boxes.map((box, index) => (
          <Box key={index} />
        ))}
      </div>
    </div>
  );
}
