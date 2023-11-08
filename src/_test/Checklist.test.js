import React from "react";
import { render, screen, findByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checklist } from "../components/Checklist/Checklist";

test("Renders Checklist compopnent", () => {
  const { getByTestId } = render(<Checklist />);
  const AllTasksList = getByTestId("checklist");
  expect(AllTasksList).toBeTruthy();
});

test("Renders Task h1 Titel element", () => {
  const { getByText } = render(<Checklist />);
  const TodoTaskBar = getByText("Tasks");
  expect(TodoTaskBar).toBeTruthy();
});
