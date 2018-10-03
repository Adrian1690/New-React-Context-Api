import React from "react";

export const Context = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Adrian",
      age: 25
    };

    this.upAge = this.upAge.bind(this);
  }

  upAge() {
    this.setState(state => ({
      age: state.age + 1
    }));
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          upAge: this.upAge
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
