import React from "react";

const Row = ({ select, characters }) => {
  if (!characters) {
    return null;
  }
  if (characters.length === 3) {
    return (
      <div className="buttons-row">
        {characters.map((char, index) =>
          char != 0 ? (
            <button key={index} onClick={select} className="btn pure-u-1-4">
              {char}
            </button>
          ) : (
            <button
              key={index}
              onClick={select}
              className="btn-zero pure-u-1-3"
            >
              {char}
            </button>
          )
        )}
      </div>
    );
  }
  const chars = characters.map((char, index) => (
    <button key={index} onClick={select} className="btn pure-u-1-4">
      {char}
    </button>
  ));
  return <div className="buttons-row">{chars}</div>;
};

export default Row;
//<button onClick={select} className="btn pure-u-1-4">
//c
//</button>
//<button className="btn pure-u-1-4">+/-</button>
//<button className="btn pure-u-1-4">%</button>
//<button className="btn pure-u-1-4">%</button>
