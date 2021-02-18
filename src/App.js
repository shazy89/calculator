import React, { useState } from "react";
import useCalculator from "./hooks/useCalculator";
import "./App.css";
import { characters, specialChars } from "./components/index";
import Row from "./components/Row";
const App = () => {
  const [select, number, total, targtNumber] = useCalculator();

  const { firstRow, secondRow, thirdRow, fourthRow, lastRow } = characters;

  return (
    <div className="intro">
      <div className="calculator box">
        <div className="digit-screen box">
          <div className="text-box">{!number.length ? total : targtNumber}</div>
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
