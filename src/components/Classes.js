import React, { Component } from "react";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import ResetButton from "./ResetButton";

export default class Classes extends Component {
  state = {
    score: 0
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    this.increment();
  };

  increment = () => {
    this.setState({ score: this.state.score + 1 });
  };

  decrement = () => {
    this.setState({ score: this.state.score - 1 });
  };

  reset = () => {
    this.setState({ score: 0 });
  };

  render() {
    const { score } = this.state;
    return (
      <div>
        <h1>{score}</h1>
        <PlusButton onClick={this.increment}>+</PlusButton>
        <ResetButton onClick={this.reset}>0</ResetButton>
        <MinusButton onClick={this.decrement}>-</MinusButton>
      </div>
    );
  }
}
