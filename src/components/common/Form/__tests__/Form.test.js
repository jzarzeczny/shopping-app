import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/react";

import Form from "../Form";

const func = jest.fn();

const mockedFormData = [{ name: "Test", id: "test" }];

describe("Testing Button component", () => {
  it("Render the component", () => {
    render(<Form inputFields={mockedFormData} />);
  });
  it("Renders the fields based on props", () => {
    render(<Form inputFields={mockedFormData} />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
  it("Button renders correctly", () => {
    render(
      <Form inputFields={mockedFormData} button="Zapisz" dataGetter={func} />
    );
    const buttonElement = screen.getByText("Zapisz");
    expect(buttonElement).toBeInTheDocument();
  });
  it("Renders correct className of form", () => {
    render(<Form inputFields={mockedFormData} button="Zapisz" source="test" />);
  });
});
