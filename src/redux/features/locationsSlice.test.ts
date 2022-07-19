import { mockLocations } from "../../mocks/locationsMocks";
import locationsSlice, { loadLoacationsActionCreator } from "./locationsSlice";

describe("Given a locationsSlice", () => {
  describe("When it receives an initial empty status and a loadLocations action with 2 locations", () => {
    test("Then it should return a new status with the locations received", () => {
      const initialStatus = {
        features: [],
      };
      const locations = mockLocations;

      const expectedStatus = mockLocations;

      const loadLocationsAction = loadLoacationsActionCreator(locations);

      const locationsStatus = locationsSlice(
        initialStatus,
        loadLocationsAction
      );

      expect(locationsStatus).toEqual(expectedStatus);
    });
  });
});
