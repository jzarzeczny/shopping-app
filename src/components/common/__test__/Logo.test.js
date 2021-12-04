import { render } from "@testing-library/react";
import Logo from "../Logo/Logo";

describe("Testing Button component", () => {
  it("Render the component", () => {
    render(<Logo />);
  });
});
