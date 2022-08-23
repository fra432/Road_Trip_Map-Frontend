import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockTrips } from "../../mocks/tripMocks";
import store from "../../redux/store/store";
import TripsListPage from "./TripsListPage";

describe("Given a TripListPage", () => {
  global.scrollTo = jest.fn();

  describe("When invoked and a trip with 2 location is loaded", () => {
    test("Then it should render an heading page title with the text 'My Trips' and 2 list element", () => {
      const expectedPageTitle = "My Trips";
      const expectedNumberOfLocations = 2;

      const loadTripsAction = {
        type: "userTrips/loadTrips",
        payload: mockTrips,
      };

      store.dispatch(loadTripsAction);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripsListPage />
          </Provider>
        </BrowserRouter>
      );

      const pageTitle = screen.getByText(expectedPageTitle);
      const locations = screen.getAllByRole("listitem");

      expect(pageTitle).toBeInTheDocument();
      expect(locations).toHaveLength(expectedNumberOfLocations);
    });
  });
});
