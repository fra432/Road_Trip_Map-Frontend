import { mockLocation } from "../../mocks/locationsMocks";
import locationSlice, {
  closeInfoModalActionCreator,
  loadLocationActionCreator,
} from "./locationSlice";

describe("Given a locationReucer", () => {
  describe("When it receives an initial empty status and a loadLocation action with a new location", () => {
    test("Then it should return a new status with the infoModalOpen property set to true and the new location as locationInfo proerty value", () => {
      const initialStatus = {
        infoModalOpen: false,
        locationInfo: {
          id: "",
          name: "",
          description: "",
          images: [],
        },
      };

      const locationInfo = mockLocation;

      const expectedStatus = {
        infoModalOpen: true,
        locationInfo,
      };

      const loadLoacationAction = loadLocationActionCreator(locationInfo);

      const locationStatus = locationSlice(initialStatus, loadLoacationAction);

      expect(locationStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial status with the infoModalOpen property set to true and a closeInfoModal action", () => {
    test("Then it should return a new status with the infoModalOpen property set to false", () => {
      const initialStatus = {
        infoModalOpen: true,
        locationInfo: mockLocation,
      };

      const expectedStatus = {
        ...initialStatus,
        infoModalOpen: false,
      };

      const closeInfoModalAction = closeInfoModalActionCreator();

      const locationStatus = locationSlice(initialStatus, closeInfoModalAction);

      expect(locationStatus).toEqual(expectedStatus);
    });
  });
});
