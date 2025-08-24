import React from "react";
import TodoList from "./components/TodoList"; // ✅ Import TodoList

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      {/* ✅ Render TodoList here */}
      <TodoList />
    </div>
  );
}

export default App;
