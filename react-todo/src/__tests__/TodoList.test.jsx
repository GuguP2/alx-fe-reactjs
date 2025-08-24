import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Test the app")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    fireEvent.change(input, { target: { value: "Write tests" } });
    const button = screen.getByText(/add todo/i);
    fireEvent.click(button);
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo item between completed and not completed", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    expect(todoItem).not.toHaveClass("completed");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed");

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("completed");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    
    // Grab one todo
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = todoItem.nextSibling; // since button is rendered next to text

    // Confirm it's there
    expect(todoItem).toBeInTheDocument();

    // Click delete
    fireEvent.click(deleteButton);

    // Ensure it's gone
    expect(todoItem).not.toBeInTheDocument();
  });
});
