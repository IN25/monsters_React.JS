//in order to use classes we import Component
import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";

//by using class, we get access to state
//state is some object with properties that we can access inside our class
class App extends Component {
  constructor() {
    super(); //calls the constructor method

    //now we have access to state
    this.state = {
      string: "Hello Islam",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>{this.state.string}</p>

          <button onClick={() => this.setState({ string: "Hello World" })}>
            Change Text
          </button>

          <a
            style={{ marginTop: "2rem" }}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
