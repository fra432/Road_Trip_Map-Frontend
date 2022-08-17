import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDispatch, mockNavigate } from "../../mocks/functionsMocks";
import store from "../../redux/store/store";
import Header from "./Header";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Header function component", () => {
  describe("When invoked", () => {
    test("Then it should render a logo image and logout icon", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getByRole("img");
      const logoutIcon = screen.getByTestId("icon-logout");

      expect(logo).toBeInTheDocument();
      expect(logoutIcon).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on the logo", () => {
    test("Then the dispatch function should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getByRole("img");

      userEvent.click(logo);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user clicks on the logout icon", () => {
    test("Then the navigate function should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logoutIcon = screen.getByTestId("icon-logout");

      userEvent.click(logoutIcon);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
