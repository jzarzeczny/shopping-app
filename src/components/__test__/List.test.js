import React from "react";
import List from "../List";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

const name = "name";
const data = [
  {
    id: 234,
    item: "cheese",
  },
];
const fn = () => {};

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
  test("Chcecks the content of li element", () => {
    render(<List name={name} data={data} removeElement={fn} />);

    const LiElement = screen.getByRole("listitem");
    expect(LiElement.innerHTML).toBe("cheese");
  });
});
