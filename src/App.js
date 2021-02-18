import React, { useState } from "react";
import "./App.css";
import { characters, specialChars } from "./components/index";
import Row from "./components/Row";
const App = () => {
  const [total, setTotal] = useState(0);
  const [number, setNumber] = useState([]);

  const targtNumber = number.join("");

  const { firstRow, secondRow, thirdRow, fourthRow, lastRow } = characters;

  console.log(number);
  const select = (e) => {
    if (!specialChars.includes(e.target.innerText)) {
      setNumber([...number, e.target.innerText]);
    }
    calculate(e.target.innerText);
  };
  const calculate = (symbol) => {
    switch (symbol) {
      case "c":
        setNumber([]);
        setTotal(0);
      case "+":
        setTotal(total);
      default:
        return symbol;
    }
  };

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
