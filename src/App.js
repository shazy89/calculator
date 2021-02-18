import "./App.css";

const App = () => {
  return (
    <div className="intro">
      <div className="calculator box">
        <div className="digit-screen box"></div>

        <div className="buttons-row">
          <button className="btn pure-u-1-4">c</button>
          <button className="btn pure-u-1-4">+/-</button>
          <button className="btn pure-u-1-4">%</button>
          <button className="btn pure-u-1-4">%</button>
        </div>
        <div className="buttons-row">
          <button className="btn pure-u-1-4">1</button>
          <button className="btn pure-u-1-4">2</button>
          <button className="btn pure-u-1-4">3</button>
          <button className="btn pure-u-1-4">*</button>
        </div>
        <div className="buttons-row">
          <button className="btn pure-u-1-4">4</button>
          <button className="btn pure-u-1-4">5</button>
          <button className="btn pure-u-1-4">6</button>
          <button className="btn pure-u-1-4">-</button>
        </div>
        <div className="buttons-row">
          <button className="btn pure-u-1-4">7</button>
          <button className="btn pure-u-1-4">8</button>
          <button className="btn pure-u-1-4">9</button>
          <button className="btn pure-u-1-4">+</button>
        </div>

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
