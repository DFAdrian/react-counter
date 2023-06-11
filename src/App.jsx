import { useState } from "react";
import style from "./App.module.css";

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <div className="count-container">
      <button className="btn" onClick={() => setCounter(count - 1)}>
        -
      </button>
      {/* <span className={count >= 0 ? "span" : "span red"}>{count}</span> */}
      <span
        className={count >= 0 ? `${style.span}` : `${style.span} ${style.red}`}
      >
        {count}
      </span>
      <button className="btn" onClick={() => setCounter(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
