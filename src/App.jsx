import React, { useState } from "react";
import "./App.css";

const generateRandomColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return randomColor;
};

const App = () => {
  const [currentColor, setCurrentColor] = useState(generateRandomColor());

  const handleGenerateColorClick = () => {
    let newColor = generateRandomColor();
    setCurrentColor(newColor);
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(currentColor)
      .then(() => {
        alert(`Sao chép mã màu ${currentColor} thành công...!`);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div className="app">
      <div className="title" style={{ color: `${generateRandomColor()}` }}>
        Random <span style={{ color: `${generateRandomColor()}` }}>Color</span>
      </div>

      <div
        className="content"
        style={{ backgroundColor: `${currentColor}` }}
      ></div>

      <div
        className="result"
        onClick={handleCopyClick}
        style={{ borderColor: `${currentColor}` }}
      >
        <div className="result-color">{currentColor}</div>
        <div className="copy-btn">
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>

      <button
        className="btn"
        onClick={handleGenerateColorClick}
        style={{ backgroundColor: `${generateRandomColor()}` }}
      >
        Generator
      </button>
    </div>
  );
};

export default App;
