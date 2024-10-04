import { useState } from "react";

export default function Box() {
  const [label, setLabel] = useState("click to edit");
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleKeyDown = () => {
    if (e.key === "Escape") {
      setShowPopup(false);
    }
    if (e.key === "Enter") {
      setLabel(inputValue);
      setShowPopup(false);
      console.log(inputValue);
    }
  };

  return (
    <div className="box">
      <div className="box-content" onClick={handleClick}>
        <p>{label}</p>
        <p>{inputValue} </p>
      </div>
      {showPopup && (
        <div className="popup">
          <input
            type="text"
            placeholder="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeydown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
}
