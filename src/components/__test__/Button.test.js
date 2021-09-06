import React from "react";
import Button from "../Button";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

const clickHandler = jest.fn();

describe("Testing Button component", () => {
  test("Renders component", () => {
    render(<Button children="test" type="pink" clickHandler={clickHandler} />);
  });
  test("Renders correct text of button", () => {
    render(<Button children="test" type="pink" clickHandler={clickHandler} />);
    const button = screen.getByRole("button");
    expect(button.innerHTML).toBe("test");
  });
  test("Button has correct class based on the props", () => {
    render(<Button children="test" type="pink" clickHandler={clickHandler} />);
    const button = screen.getByRole("button");
    expect(button.classList.contains("btn--pink")).toBe(true);
  });
  test("Fire function on clikc", () => {
    render(<Button children="test" type="pink" clickHandler={clickHandler} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalled();
  });
});
