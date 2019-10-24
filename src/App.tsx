import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to my todo App</h1>
      <TodoList />
    </div>
  );
};

export default App;
