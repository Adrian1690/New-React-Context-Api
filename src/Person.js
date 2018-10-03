import React from "react";
import { Context } from "./Provider";

class Person extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <p>I'm {context.state.name}</p>
            <p>My age is {context.state.age}</p>
            <button onClick={context.upAge}>Up Age</button>
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}

export default Person;
