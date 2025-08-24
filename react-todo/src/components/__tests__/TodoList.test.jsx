import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    // Check if className "completed" is applied
    expect(todo).toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});

export default TodoList.test.jsx;