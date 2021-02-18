import "./App.css";
import { characters } from "./components/data";
import Row from "./components/Row";
const App = () => {
  console.log(characters);
  const { firstRow, secondRow, thirdRow, fourthRow, lastRow } = characters;
  const select = (e) => {
    // e.target.innerText
    console.log(e.target.innerText);
  };
  return (
    <div className="intro">
      <div className="calculator box">
        <div className="digit-screen box"></div>

        <Row select={select} characters={firstRow} />
        <Row select={select} characters={secondRow} />
        <Row select={select} characters={thirdRow} />
        <Row select={select} characters={fourthRow} />

        <div className="buttons-row">
          <button className="btn-zero pure-u-1-3">0</button>
          <button className="btn pure-u-1-3">,</button>
          <button className="btn pure-u-1-3">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
