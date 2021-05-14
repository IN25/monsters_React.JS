import React, { Component } from "react";
import { CardList } from "./components/card-list/card_list";
import { SearchBox } from "./components/search_box/search_box";
import "./app.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  //componentDidMount gets called automatically by React when a render happens
  componentDidMount() {
    //when you call fetch, it returns you a promise. If fetching is successfull, it will resolve. If it is not, for example if the server is down, or we do not have permissions to access the data, it will give a reject.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log("Error fetching the user data"));
  }

  //A user-defined class method
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    //!!!destructuring!!!
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder={"search monsters"}
          handleChange={this.handleChange}
        ></SearchBox>

        {/* we can pass properties(parameters to components and access them in the components using props). Also, if we place some elements between <CardList> </CardList>, we can access these elements in the component using props.children  */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
