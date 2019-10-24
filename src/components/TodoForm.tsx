import React, { HTMLProps, ChangeEvent } from "react";

// Need another property: onInputChange. Because this attribute is not one that normally exists on a form
interface Props extends HTMLProps<HTMLFormElement> {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const TodoForm = ({ onInputChange, inputValue, ...props }: Props) => {
  return (
    // Using the spread operator allows us to pass all the properties, that our component receives, through to another component.
    <form {...props}>
      <input placeholder="Task" onChange={onInputChange} value={inputValue} />
      <button>Create</button>
    </form>
  );
};

export default TodoForm;
