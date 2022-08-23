import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDispatch, mockNavigate } from "../../mocks/functionsMocks";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a HomePage function", () => {
  global.scrollTo = jest.fn();

  describe("When invoked", () => {
    test("Then it should render a div with the text 'Create new Trip' and one with the text 'My Trips'", () => {
      const createTripText = "Create new Trip";
      const myTripsText = "My Trips";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const createTrip = screen.getByText(createTripText);
      const myTrips = screen.getByText(myTripsText);

      expect(createTrip).toBeInTheDocument();
      expect(myTrips).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on the 'Create new Trip' field", () => {
    test("Then it should call the dispatch function", () => {
      const createTripText = "Create new Trip";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const createTrip = screen.getByText(createTripText);

      userEvent.click(createTrip);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user clicks on the 'My Trips' field", () => {
    test("Then it call the navigate function", () => {
      const myTripsText = "My Trips";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const myTrips = screen.getByText(myTripsText);

      userEvent.click(myTrips);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
