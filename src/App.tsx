import React, { useState, FormEvent } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Todo } from "./interfaces/Todo";

const App: React.FC = () => {
  // Nested generics
  // Array<string> = ["A", "V"]
  // Array<Todo> = [ { task: 's', finished: false }, { task: 's', finished: false } ]
  const [todos, setTodos] = useState<Array<Todo>>([]);

  // The initial value of our state is the same type as any other value it will contain, So we don't have to tell TypeScript that it's a string
  const [todoValue, setTodoValue] = useState("");

  // Need to tell TypeScript what type event is.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos(previousTodos => [
      ...previousTodos,
      {
        task: todoValue,
        finished: false
      }
    ]);
  };

  return (
    <div className="App">
      <h1>Welcome to my todo App</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
