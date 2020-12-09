import React, { useState } from "react";
import "./board.css";
const Board = () => {
  const [BoxVal, setBoxVal] = useState(Array(9).fill(null));
  const [isX, setisX] = useState(Array(9).fill(true));

  const handleClick = (index) => {
    let newBoxVal = [...BoxVal];
    newBoxVal[index] = isX ? "X" : 0;
    setBoxVal(newBoxVal);
    setisX(!isX);
  };
  return (
    <main className="Board">¡
      <h1>ss</h1>
      {BoxVal.map((obj, i) => (
        <div key={i} onClick={() => handleClick(i)}>
          {obj}
        </div>
      ))}
    </main>
  );
};

export default Board;
