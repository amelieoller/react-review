import React, { Component } from "react";

class TodosContainer extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Undo Complete</th>
          </tr>

          {/* Render your todos here */}
        </tbody>
      </table>
    );
  }
}

export default TodosContainer;
