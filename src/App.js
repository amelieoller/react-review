import React, { Component } from "react";
import "./App.css";
import TodosContainer from "./containers/TodosContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">To Do List</h1>
        <h4>Let's be Productive!</h4>

        <TodosContainer />
      </div>
    );
  }
}

export default App;
