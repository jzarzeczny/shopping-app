import React from "react";
import SubmitList from "../SubmitList";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ListContextProvider } from "../../context/DisplayListContext";

describe("Testing SubmitList component", () => {
  test("Renders component", () => {
    render(
      <Router>
        <ListContextProvider>
          <SubmitList />
        </ListContextProvider>
      </Router>
    );
  });

  test("Display correnct amount of buttons", () => {
    render();
    const ButtonsElements = screen.queryAllByRole("button");
    expect(ButtonsElements.length).toBe(2);
  });

  // Integration test

  // test("Click on button runs the function", () => {
  //   render(
  //     <Router>
  //       <ListContextProvider>
  //         <SubmitList />
  //       </ListContextProvider>
  //     </Router>
  //   );
  //   const ButtonElement = screen.getByText(/Usuń listę/i);
  //   fireEvent.click(ButtonElement);
  //   expect(fn).toBeCalled();
  // });
});
