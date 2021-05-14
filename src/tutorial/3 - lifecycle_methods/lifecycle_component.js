import React from "react";

class Lifecycle_component extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }

  //There are different lifecycle methods (phases) in React. https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  // - Mounting is the phase when a component is being put on the DOM for the first time. Mounting calls the constructor first. After the constructor call, the rendor method is being called.

  // - componentDidMount(). After Mounting, the componentDidMount lifecycle method is being called. Usually this is where we fetch our data from API. We do that after we mounted(rendered) the base component, because fetching from API might be unpredictable(the server might be slow or even down, connection poor), so we want to load the main part of our application first

  // - componentDidUpdate(). This method is called whenever there are props passed into a component or setState is used.

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //shouldComponentUpdate() is a lifecycle method that determines whether or not the component should be re-rendered. For example if there is a setState happened in the App component the whole application gets re-rendered, BUT if thetext for the Lifecycle_component did not change, we do not need to re-render Lifecycle_component component for the sake of improving the performance of our application. So, we prevent it from re-rendering using the shouldComponentUpdate method
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps);
    return this.props.text !== nextProps.text;
  }

  //componentWillUnmount() is a lifecycle method that is gets called after we click the "Toggle" button and the Lifecycle_component is removed. This is where we would usually free up the allocated memory to prevent memory leak.
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    return (
      <>
        <h2>Lifecycle Component</h2>
        <p>{this.props.text}</p>
      </>
    );
  }
}

export default Lifecycle_component;
