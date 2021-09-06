import React from "react";
import List from "../List";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

const name = "name";
const data = [
  {
    id: 234,
    item: "cheese",
  },
];
const fn = jest.fn();

describe("Testing List component", () => {
  test("Renders component", () => {
    render(<List name={name} data={data} removeElement={fn} />);
  });

  test("Renders the correct header", () => {
    render(<List name={name} data={data} removeElement={fn} />);
    const header = screen.getByRole("heading");
    expect(header.innerHTML).toBe("NAME");
  });
  test("Checks the classname of the parent div", () => {
    const { container } = render(
      <List name={name} data={data} removeElement={fn} />
    );
    const div = container.querySelector("#list");
    expect(div.classList.contains("list--" + name)).toBe(true);
  });
  test("Check if button is in the document", () => {
    render(<List name={name} data={data} removeElement={fn} />);
    const button = screen.getByTestId("remove-button");
    expect(button).toBeInTheDocument();
  });
  test("Check if button runs the function", () => {
    render(<List name={name} data={data} removeElement={fn} />);
    const button = screen.getByTestId("remove-button");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
});
