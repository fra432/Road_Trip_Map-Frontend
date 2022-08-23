import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDispatch, mockNavigate } from "../../mocks/functionsMocks";
import store from "../../redux/store/store";
import MapPage from "./MapPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    tripId: "62e4242ba49b6b6d9e341abf",
  }),
}));

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

beforeEach(() => {
  const loadTripAction = {
    type: "locations/loadLocations",
    payload: {
      name: "Barcelona",
      tripId: "62e4242ba49b6b6d9e341abf",
      features: [],
    },
  };

  store.dispatch(loadTripAction);
});

describe("Given a MapPage function", () => {
  global.scrollTo = jest.fn();

  describe("When invoked with the trip 'Barcelona'", () => {
    test("Then it should render a heading with the text 'Barcelona' and 3 icons", () => {
      const expectedTripName = "Barcelona";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MapPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: expectedTripName });
      const mapIcon = screen.getByTestId("map-icon");
      const deleteIcon = screen.getByTestId("delete-icon");
      const homeIcon = screen.getByTestId("home-icon");

      expect(heading).toBeInTheDocument();
      expect(mapIcon).toBeInTheDocument();
      expect(deleteIcon).toBeInTheDocument();
      expect(homeIcon).toBeInTheDocument();
    });
  });

  describe("When invoked with the trip 'Barcelona' and the user clicks on the delete icon and than on the 'Delete Trip' button that shows up", () => {
    test("Then the dispatch function should be invoked", () => {
      const expectedButtonText = "Delete Trip";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MapPage />
          </Provider>
        </BrowserRouter>
      );

      const deleteIcon = screen.getByTestId("delete-icon");

      userEvent.click(deleteIcon);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      userEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user clicks on the map icon", () => {
    test("Then the navigatre function should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MapPage />
          </Provider>
        </BrowserRouter>
      );

      const mapIcon = screen.getByTestId("map-icon");

      userEvent.click(mapIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user clicks on the home icon", () => {
    test("Then the navigatre function should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MapPage />
          </Provider>
        </BrowserRouter>
      );

      const homeIcon = screen.getByTestId("home-icon");

      userEvent.click(homeIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
