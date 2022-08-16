import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import About from "../About/About";

let mockPath = "/my_trips";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: mockPath,
  }),
}));

describe("Given an About component function", () => {
  describe("When invoked and the location path is '/my_trips'", () => {
    test("Then it should render  headings", () => {
      const expectedNumberOfHeadings = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <About />
          </Provider>
        </BrowserRouter>
      );

      const headings = screen.getAllByRole("heading");

      expect(headings).toHaveLength(expectedNumberOfHeadings);
    });
  });

  describe("When invoked and the location path is '/home'", () => {
    test("Then it should render 4 headings", () => {
      mockPath = "/home";
      const expectedNumberOfHeadings = 4;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <About />
          </Provider>
        </BrowserRouter>
      );

      const headings = screen.getAllByRole("heading");

      expect(headings).toHaveLength(expectedNumberOfHeadings);
    });
  });
});
