import React from "react";

const Row = ({ select, characters }) => {
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
