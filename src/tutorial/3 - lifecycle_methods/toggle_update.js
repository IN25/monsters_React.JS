import React, { useState } from "react";
import Lifecycle_component from "./lifecycle_component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true,
      text: "",
    };
  }

  render() {
    return (
      <>
        <p>
          <button
            //we return from setState to makes sure we are using the latest state
            onClick={() => {
              this.setState((prevState) => {
                return { show: !prevState.show };
              });
            }}
          >
            Toggle
          </button>
        </p>

        <p>
          <button
            onClick={() => {
              this.setState((prevState) => {
                return { text: prevState.text + "_hello" };
              });
            }}
          >
            Update Text
          </button>
        </p>

        <p>
          {this.state.show ? (
            <Lifecycle_component text={this.state.text}></Lifecycle_component>
          ) : (
            ""
          )}
        </p>
      </>
    );
  }
}
export default App;

// export const App = () => {
//   const [show, setShow] = useState(true);
//   const [text, setText] = useState("");

//   return (
//     <>
//       <p>
//         <button onClick={() => setShow(!show)}>Toggle</button>
//       </p>

//       <p>
//         <button onClick={() => setText(text + "_hello")}>Update Text</button>
//       </p>

//       <p>{show ? <Lifecycle_component></Lifecycle_component> : ""}</p>
//       <p>{text}</p>
//     </>
//   );
// };