import { mockUserTrips } from "../../mocks/tripMocks";
import userTripsSlice, {
  closeTripFormActionCreator,
  deleteTripActionCreator,
  loadTripsActionCreator,
  openTripFormActionCreator,
} from "./userTripsSlice";

describe("Given a userTripsReducerr", () => {
  describe("When it receives an initial empty userTrips status and a loadTrips action with 2 Trips", () => {
    test("Then it should return a new status with the 2 trips added to the userTrips property", () => {
      const initialStatus = {
        userTrips: [],
        openTripForm: false,
      };

      const userTrips = mockUserTrips;

      const expectedStatus = {
        userTrips: userTrips,
        openTripForm: false,
      };

      const loadTripsAction = loadTripsActionCreator(userTrips);

      const userTripsStatus = userTripsSlice(initialStatus, loadTripsAction);

      expect(userTripsStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial userTrips status with 2 trips and a deleteTrip action with the id of the second trip as payload", () => {
    test("Then it should return a new status with just 1 trip left", () => {
      const initialStatus = {
        userTrips: mockUserTrips,
        openTripForm: false,
      };

      const tripIdToDelete = "63025452e46546c114c9a01b";

      const expectedStatus = {
        userTrips: [
          {
            name: "Barcelona",
            id: "63025452e46546c114c9a01a",
            image: "image.jpeg",
          },
        ],
        openTripForm: false,
      };

      const deleteTripsAction = deleteTripActionCreator(tripIdToDelete);

      const userTripsStatus = userTripsSlice(initialStatus, deleteTripsAction);

      expect(userTripsStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial userTrips status with the openTripForm property set to false and a openTripFormAction", () => {
    test("Then it should return a new status with the openTripForm property set to true", () => {
      const initialStatus = {
        userTrips: [],
        openTripForm: false,
      };

      const expectedStatus = {
        userTrips: [],
        openTripForm: true,
      };

      const openTripFormAction = openTripFormActionCreator();

      const userTripsStatus = userTripsSlice(initialStatus, openTripFormAction);

      expect(userTripsStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial userTrips status with the openTripForm property set to true and a closeTripFormAction", () => {
    test("Then it should return a new status with the openTripForm property set to false", () => {
      const initialStatus = {
        userTrips: [],
        openTripForm: true,
      };

      const expectedStatus = {
        userTrips: [],
        openTripForm: false,
      };

      const closeTripFormAction = closeTripFormActionCreator();

      const userTripsStatus = userTripsSlice(
        initialStatus,
        closeTripFormAction
      );

      expect(userTripsStatus).toEqual(expectedStatus);
    });
  });
});
