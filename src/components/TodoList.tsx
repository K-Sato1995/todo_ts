import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <ul>
      <TodoListItem todo={{ task: "test Task", finished: false }} />
    </ul>
  );
};

export default TodoList;
