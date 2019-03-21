import React, { Component } from "react";
import "./App.css";
import styled from "react-emotion";
import Classes from "./components/Classes";
import Hooks from "./components/Hooks";
import HooksWithEffect from "./components/HooksWithEffect";

const FlexWrapper = styled("div")`
  display: flex;
  width: 100%;
  font-size: 400%;
  height: 1200px;
`;

const Container = styled("div")`
  margin: 5px;
  min-width: 300px;
  padding: 20px;
  width: 50%;
`;

const HooksContainer = styled(Container)`
  background-color: #ccccff;
`;

const HooksEffectContainer = styled(Container)`
  background-color: #ccffcc;
`;

const ClassesContainer = styled(Container)`
  background-color: #ffcccc;
`;

class App extends Component {
  render() {
    return (
      <div id="app" className="App">
        <FlexWrapper>
          <HooksContainer>
            <h2>Hooks</h2>
            <Hooks />
          </HooksContainer>
          <HooksEffectContainer>
            <h2>HooksWithEffect</h2>
            <HooksWithEffect />
          </HooksEffectContainer>
          <ClassesContainer>
            <h2>Classes</h2>
            <Classes />
          </ClassesContainer>
        </FlexWrapper>
      </div>
    );
  }
}

export default App;

// <HooksEffectContainer>
//   <HooksWithEffect />
// </HooksEffectContainer>
