import React from "react";
import { Todo } from "../interfaces/Todo";

interface Props {
  todo: Todo;
}

const TodoListItem = ({ todo }: Props) => {
  return <li>{todo.task}</li>;
};

export default TodoListItem;
