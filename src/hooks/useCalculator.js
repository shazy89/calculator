import { useState } from "react";
import { specialChars } from "../components/index";
export default () => {
  const [total, setTotal] = useState(0);
  const [number, setNumber] = useState([]);
  const [prevOperator, setPrevOperator] = useState("");
  const targtNumber = number.join("");

  const select = (e) => {
    if (!specialChars.includes(e.target.innerText)) {
      setNumber([...number, e.target.innerText]);
    }
    calculate(e.target.innerText, targtNumber);
  };

  const calculate = (symbol, nmbr) => {
    let number = parseInt(nmbr);

    switch (symbol) {
      case "c":
        setNumber([]);
        setTotal(0);
        break;
      case "+":
        if (number) {
          setTotal(number + total);
          setPrevOperator("+");
          setNumber([]);
        } else {
          setTotal(total);
        }
        break;
      case "-":
        if (number && total !== 0) {
          setPrevOperator("-");
          setTotal(total - number);
          setNumber([]);
        } else if (number && total === 0) {
          setPrevOperator("-");
          setTotal(number);
          setNumber([]);
        } else {
          setTotal(total);
        }
        break;
      case "*":
        if (number && total !== 0) {
          setTotal(number * total);
          setPrevOperator("*");
          setNumber([]);
        } else if (number && total === 0) {
          setPrevOperator("*");
          setTotal(number);
          setNumber([]);
        } else {
          setTotal(total);
        }
        break;
      case "/":
        if (number && total !== 0) {
          setTotal(number / total);
          setPrevOperator("/");
          setNumber([]);
        } else if (number && total === 0) {
          setPrevOperator("/");
          setTotal(number);
          setNumber([]);
        } else {
          setTotal(total);
        }
        break;
      case "=":
        if (number && prevOperator === "+") setTotal(number + total);
        if (number && prevOperator === "-") setTotal(total - number);
        if (number && prevOperator === "*") setTotal(total * number);
        if (number && prevOperator === "/") setTotal(total / number);

        setNumber([]);

        break;
      default:
        return symbol;
    }
  };

  return [select, number, total, targtNumber];
};
