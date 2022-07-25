import newLocationSlice, {
  addCoordinatesActionCreator,
  closeLocationFormActionCreator,
  openLocationFormActionCreator,
} from "./newLocationSlice";

describe("Given a newLocationSlice", () => {
  describe("When it receives an inital status and an addCoordinates action with new coordinates [41.3787636, 2.1690454]", () => {
    test("then it should return a new status with the new coordinates added", () => {
      const initialStatus = {
        openLocationForm: false,
        coordinates: [],
      };

      const newCoordinates = [41.3787636, 2.1690454];

      const expectedStatus = {
        openLocationForm: false,
        coordinates: newCoordinates,
      };

      const addCoordinatesAction = addCoordinatesActionCreator(newCoordinates);

      const newLocationStatus = newLocationSlice(
        initialStatus,
        addCoordinatesAction
      );

      expect(newLocationStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an inital status with the openLocationForm attribute set to false and a openLocationForm action", () => {
    test("then it should return a new status with the openLocationForm attribute set to true", () => {
      const initialStatus = {
        openLocationForm: false,
        coordinates: [],
      };

      const expectedStatus = {
        openLocationForm: true,
        coordinates: [],
      };

      const openLocationFormAction = openLocationFormActionCreator();

      const newLocationStatus = newLocationSlice(
        initialStatus,
        openLocationFormAction
      );

      expect(newLocationStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an inital status with the openLocationForm attribute set to true and a closeLocationForm action", () => {
    test("then it should return a new status with the openLocationForm attribute set to false", () => {
      const initialStatus = {
        openLocationForm: true,
        coordinates: [],
      };

      const expectedStatus = {
        openLocationForm: false,
        coordinates: [],
      };

      const closeLocationFormAction = closeLocationFormActionCreator();

      const newLocationStatus = newLocationSlice(
        initialStatus,
        closeLocationFormAction
      );

      expect(newLocationStatus).toEqual(expectedStatus);
    });
  });
});
