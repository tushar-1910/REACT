import React from "react";

export const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <h1>TODO LIST USING JSON SERVER</h1>
      <input
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>ADD TODO</button>
    </>
  );
};
