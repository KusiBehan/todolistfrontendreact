import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Popup from "../components/Popup/Popup";

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
});
