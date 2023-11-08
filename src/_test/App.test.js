import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("renders App component", () => {
  const { getByText, getByTestId } = render(<App />);
});

test("renders Add Task component", () => {
  const { getByText, getByTestId } = render(<App />);
  const addTaskButton = getByText("Add Task");
  expect(addTaskButton).toBeInTheDocument();
});

test("renders UpdateList component", () => {
  const { getByText, getByTestId } = render(<App />);
  const UpdateListButton = getByText("UpdateList");
  expect(UpdateListButton).toBeInTheDocument();
});
