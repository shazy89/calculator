import React, { useState } from "react";
import "./App.css";
import { characters } from "./components/index";
import Row from "./components/Row";
const App = () => {
  const [total, setTotal] = useState(0);
  const [number, setNumber] = useState([]);

  const { firstRow, secondRow, thirdRow, fourthRow, lastRow } = characters;

  console.log(number);
  const select = (e) => {
    console.log(e.target.innerText);
    setNumber([...number, e.target.innerText]);
  };
  const targtNumber = number.join("");
  console.log(targtNumber);
  return (
    <div className="intro">
      <div className="calculator box">
        <div className="digit-screen box">
          <div className="text-box">{targtNumber}</div>
        </div>

        <Row select={select} characters={firstRow} />
        <Row select={select} characters={secondRow} />
        <Row select={select} characters={thirdRow} />
        <Row select={select} characters={fourthRow} />
        <Row select={select} characters={lastRow} />
      </div>
    </div>
  );
};

export default App;
