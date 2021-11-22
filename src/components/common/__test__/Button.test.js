import { render } from "@testing-library/react";
import Button from "../Button/Button";
import { fireEvent, screen } from "@testing-library/react";

const func = jest.fn();

describe("Testing Button component", () => {
  it("Render the component", () => {
    render(<Button form="true" />);
  });
  it("Runs the funcion onClick", () => {
    render(<Button form="true" clickFunc={func} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(func).toBeCalled();
  });
  it("Change type based on props", () => {
    render(<Button form="testForm" />);
    const button = screen.getByRole("button");
    expect(button.type).toBe("submit");
  });
  it("Change the className based on props", () => {
    render(<Button form="true" source="--test" />);
    const button = screen.getByRole("button");
    expect(button.classList).toContain("button--test");
  });
  it("Render correct children", () => {
    render(<Button form="true">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Test");
  });
});
