import React from "react";
import PaperCard from "../PaperCard";
import "@testing-library/jest-dom/extend-expect";
import { ListContextProvider } from "../../context/DisplayListContext";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// const TEST_KEY = "list";
// const TEST_VALUE = { item: "Mandarynki", type: "fruits", id: "qvhftbs" };

describe("Testing List component", () => {
  afterEach(() => {
    localStorage.clear();
  });
  test("Renders component", () => {
    render(
      <Router>
        <ListContextProvider>
          <PaperCard />
        </ListContextProvider>
      </Router>
    );
  });
});
