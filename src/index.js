import React from "react";
import ReactDOM from "react-dom";
import Provider from "./Provider";
import Family from "./Family";
import "./styles.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <p>I'm the app</p>

        <Family />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
