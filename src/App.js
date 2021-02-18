import "./App.css";
import { characters } from "./components/index";
import Row from "./components/Row";
const App = () => {
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
        <Row select={select} characters={lastRow} />
      </div>
    </div>
  );
};

export default App;
