import React, { HTMLProps } from "react";

const TodoForm = (props: HTMLProps<HTMLFormElement>) => {
  return (
    // Using the spread operator allows us to pass all the properties, that our component receives, through to another component.
    <form {...props}>
      <input placeholder="Task" />
      <button>Create</button>
    </form>
  );
};

export default TodoForm;
