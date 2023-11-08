import { Checklist } from "../components/Checklist/Checklist";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockdata = [
  { id: 1, task: "First Task", status: true },
  { id: 2, task: "Second Task", status: true },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockdata),
  })
);

test("renders a list of tasks", async () => {
  render(<Checklist />);
  const taskslabel = await screen.findAllByTestId("testlabel");
  expect(taskslabel).toHaveLength(2);
});

test("renders taskdiv element", async () => {
  render(<Checklist />);
  const taskslabel = await screen.findAllByTestId("taskdiv");
  expect(taskslabel).toBeTruthy();
});

test("renders a list of tasks", async () => {
  render(<Checklist />);
  await screen.findByText("First Task");
  const taskslabel = screen.getByText("First Task");
  expect(taskslabel).toBeInTheDocument();
});
