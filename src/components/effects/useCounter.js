import { useState, useEffect } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      setCount(1000);
    }
  }, [count]);

  return [count, setCount];
};

export default useCounter;
