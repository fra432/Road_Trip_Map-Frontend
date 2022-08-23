import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockTrips } from "../../mocks/tripMocks";
import store from "../../redux/store/store";
import TripsList from "./TripsList";

describe("Given a TripList function", () => {
  describe("When invoked with a trip with 2 locations", () => {
    test("Then it should render 2 list elements", () => {
      const expectedNumberOfLocations = 2;

      const loadTripsAction = {
        type: "userTrips/loadTrips",
        payload: mockTrips,
      };

      store.dispatch(loadTripsAction);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripsList />
          </Provider>
        </BrowserRouter>
      );

      const trips = screen.getAllByRole("listitem");

      expect(trips).toHaveLength(expectedNumberOfLocations);
    });
  });
});
