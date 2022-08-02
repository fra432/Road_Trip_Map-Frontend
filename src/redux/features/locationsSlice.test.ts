import { mockLocations } from "../../mocks/locationsMocks";
import locationsSlice, {
  addLocationActionCreator,
  deleteLocationActionCreator,
  loadLocationsActionCreator,
} from "./locationsSlice";

describe("Given a locationsSlice", () => {
  describe("When it receives an initial empty status and a loadLocations action with 2 locations", () => {
    test("Then it should return a new status with the locations received", () => {
      const initialStatus = {
        tripId: "",
        features: [],
      };
      const locations = mockLocations;

      const expectedStatus = mockLocations;

      const loadLocationsAction = loadLocationsActionCreator(locations);

      const locationsStatus = locationsSlice(
        initialStatus,
        loadLocationsAction
      );

      expect(locationsStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives a initial empty status and a addLocation action with a new location", () => {
    test("Then it should return a a new status with the new loaction added to the original empty status", () => {
      const initialStatus = {
        tripId: "1",
        features: [],
      };

      const newLocation = mockLocations.features[0];

      const expectedStatus = {
        tripId: "1",
        features: [mockLocations.features[0]],
      };

      const addLocationAction = addLocationActionCreator(newLocation);

      const locationsStatus = locationsSlice(initialStatus, addLocationAction);

      expect(locationsStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial status with 2 locations and a deleteLocations action with the id of the first location", () => {
    test("Then it should return a new status with just the second location", () => {
      const initialStatus = {
        tripId: "1",
        features: mockLocations.features,
      };
      const firstlocationID = "960";

      const expectedStatus = {
        tripId: "1",
        features: [mockLocations.features[1]],
      };

      const deleteLocationsAction =
        deleteLocationActionCreator(firstlocationID);

      const locationsStatus = locationsSlice(
        initialStatus,
        deleteLocationsAction
      );

      expect(locationsStatus).toEqual(expectedStatus);
    });
  });
});
