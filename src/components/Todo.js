import React from "react";

const Todo = () => (
  <tr>
    <td>{/* Todo content goes here */}</td>
    <td>
      <input
        type="checkbox"
        checked={null}
        onChange={() => console.log("You changed the checkbox")}
      />
    </td>
  </tr>
);

export default Todo;
