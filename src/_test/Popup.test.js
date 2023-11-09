import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BuildRequestBody } from "../components/Popup/requestUtils";
import Popup from "../components/Popup/Popup";
import "@testing-library/jest-dom";

describe("Popup Component", () => {
  it("renders the popup with input and buttons", async () => {
    const closePopup = jest.fn(); // Mock closePopup function

    const { getByText, getByTestId } = render(
      <Popup text="Test Popup" closePopup={closePopup} />
    );

    // Verify that the input field is rendered
    const inputElement = getByTestId("task-input");
    expect(inputElement).toBeTruthy();

    // Verify that the "Create" button is rendered
    const createButton = getByText("Create");
    expect(createButton).toBeTruthy();

    // Verify that the "Close" button is rendered
    const closeButton = getByText("Close");
    expect(closeButton).toBeTruthy();
  });

  describe("Popup Component", () => {
    it("renders without errors", () => {
      render(<Popup />);
    });
  });

  it("handles input change", () => {
    const { getByTestId } = render(<Popup />);
    const inputElement = getByTestId("task-input");
    fireEvent.change(inputElement, { target: { value: "Test Task" } });
    expect(inputElement.value).toBe("Test Task");
  });

  it('calls closePopup when the "Close" button is clicked', () => {
    const closePopupMock = jest.fn();
    const { getByText } = render(<Popup closePopup={closePopupMock} />);
    const closeButton = getByText("Close");

    fireEvent.click(closeButton);

    expect(closePopupMock).toHaveBeenCalled();
  });

  describe("Popup Component", () => {
    it('renders the div with class "popup-container"', () => {
      const closePopup = jest.fn();
      render(<Popup closePopup={closePopup} />);
      const popupContainer = screen.getByTestId("popupcnt");
      expect(popupContainer).toBeInTheDocument();
    });
  });

  describe("Popup Component", () => {
    it('renders the div with class "popup-container"', () => {
      const closePopup = jest.fn();
      render(<Popup closePopup={closePopup} />);
      const popupContainer = screen.getByTestId("bodypopup");
      expect(popupContainer).toBeInTheDocument();
    });
  });
});
describe("BuildRequestBody function", () => {
  it("should build a request body with incremented ID", () => {
    const lastID = "5"; // Provide a sample lastID
    const task = "Test Task";
    const expectedData = {
      id: "6",
      task: "Test Task",
      status: true,
    };

    const result = BuildRequestBody(lastID, task);

    expect(result).toEqual(expectedData);
  });

  it("should handle edge cases with lastID", () => {
    const lastID = "NaN";
    const task = "Test Task";
    const expectedData = {
      id: "NaN",
      task: "Test Task",
      status: true,
    };
    const result = BuildRequestBody(lastID, task);
    expect(result).toEqual(expectedData);
  });
});
