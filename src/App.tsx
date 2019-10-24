import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to my todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
