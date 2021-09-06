import React from "react";
import PaperText from "../PaperText";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

const clickHandler = jest.fn();

const MockedList = [
  {
    item: "Frytki",
    type: "frozen",
    id: "gcgbeaa",
  },
  {
    item: "Mięso",
    type: "frozen",
    id: "wdgdf",
  },
  {
    item: "Lody",
    type: "frozen",
    id: "psxnyw",
  },
];

describe("Testing PaperText component", () => {
  test("Renders component", () => {
    render(<PaperText data={MockedList} />);
  });
  test("Display correct header", () => {
    render(<PaperText data={MockedList} />);
    const header = screen.getByRole("heading");
    expect(header.innerHTML).toBe("frozen");
  });
  test("Display correnct item list", () => {
    render(<PaperText data={MockedList} />);
    const LiElements = screen.queryAllByRole("listitem");
    expect(LiElements.length).toBe(3);
  });
});
