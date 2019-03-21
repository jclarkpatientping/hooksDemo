import React from "react";
import useCounter from "./effects/useCounter";

import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import ResetButton from "./ResetButton";

const HooksWithEffect = () => {
  const [count, setCount] = useCounter();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <PlusButton onClick={increment}>+</PlusButton>
      <ResetButton onClick={reset}>0</ResetButton>
      <MinusButton onClick={decrement}>-</MinusButton>
    </div>
  );
};

export default HooksWithEffect;
