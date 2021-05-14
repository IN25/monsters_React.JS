import React from "react";

class App extends React.Component {
  constructor(props) {
    //we add props as a parameter to be able to use passed properties in the constructor
    super(props);

    this.state = {
      counter: 0,
    };
  }

  // //when an application has multiple setStates, React allocates all of them and updates them all together, rather than one by one for optimazation purposes
  // handleClick = () => {
  //   this.setState({ counter: this.state.counter + 1 }); //this call is asynchronous, meaning React cannot guarantee that this will be updated immediately and can be updated later on with the other states
  //   console.log(this.state.counter); //If we check the state right away after setting it, it will not be updated yet. This is because we give React a responsibilty to update the state when it is the best time for optimization, and when we console.loging the state the state has not been updated yet
  // };

  // //if we pass a callback function, now everything is in synch. But this is a bad practice. Our application might have other setStates that update this.state.counter, and it might not be the latest version here, because React has not updated it yet.
  // handleClick = () => {
  //   this.setState({ counter: this.state.counter + 1 }, () =>
  //     console.log(this.state.counter)
  //   );
  // };

  //What we should do instead is to pass a callback function to this.seState() that takes 2 parameters (prevState, prevProps) and use prevState.counter to access the latest state in our application.
  //prevState.counter ensures that we use the latest state in our application. You should use this method if you do some calculation with your state
  //prevProps is there for ensuring that this handleClick uses the latest props if it was passed to our </App> component in the index.js
  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { counter: prevState.counter + 1 };
      },
      () => console.log(this.state.counter)
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheimageconference.org%2F&psig=AOvVaw1n9LE6a1WDeoufDqBJnHtP&ust=1620836194098000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjN57-DwvACFQAAAAAdAAAAABAD"
            alt="logo"
            className="App-logo"
          />

          <p>{this.state.counter}</p>

          <button onClick={this.handleClick}>Increment</button>
        </header>
      </div>
    );
  }
}

export default App;
