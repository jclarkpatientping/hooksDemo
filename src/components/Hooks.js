import React, { useState, useEffect, useRef } from "react";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import ResetButton from "./ResetButton";

const Hooks = () => {
  const [score, setScore] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  let scoreRef = useRef(score);
  let scrollRef = useRef(scrollPosition);

  const increment = () => {
    setScore(scoreRef.current + 1);
  };

  const decrement = () => {
    setScore(scoreRef.current - 1);
  };

  const reset = () => {
    setScore(0);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    setScrollPosition(scrollTop);
    const isScrollingDown = scrollTop > scrollRef.current;
    const bufferHeight = Math.ceil(window.innerHeight / 3);
    const distanceToBottom = scrollHeight - (window.innerHeight + scrollTop);

    if (
      (isScrollingDown || distanceToBottom === 0) &&
      distanceToBottom < bufferHeight
    ) {
      increment();
    }

    if (!isScrollingDown && scrollTop < bufferHeight) {
      decrement();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    scrollRef.current = scrollPosition;
  }, [scrollPosition]);

  return (
    <div>
      <h1>{score}</h1>
      <h2>
        {scrollPosition} | {scrollRef.current}
      </h2>
      <PlusButton onClick={increment}>+</PlusButton>
      <ResetButton onClick={reset}>0</ResetButton>
      <MinusButton onClick={decrement}>-</MinusButton>
    </div>
  );
};

export default Hooks;
