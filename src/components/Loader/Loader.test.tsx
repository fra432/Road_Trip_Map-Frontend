import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Loader from "./Loader";

describe("Given a Loading component", () => {
  describe("When invoked", () => {
    test("Then it should render a spinner and a hidden 'Loading...' text", () => {
      const expectedLoaderText = "Loading...";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Loader />
          </Provider>
        </BrowserRouter>
      );

      const loading = screen.getByText(expectedLoaderText);

      expect(loading).toBeInTheDocument();
    });
  });
});
