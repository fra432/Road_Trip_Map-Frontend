import { mockToast } from "../../mocks/methodMocks";
import axios from "axios";
import { mockLocations } from "../../mocks/locationsMocks";
import { addLocationThunk, getLocationThunk } from "./locationsThunks";
import { loadLocationsActionCreator } from "../features/locationsSlice";

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

describe("Given a getLocationsThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch function whith the loadLoactionActionCreator", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: mockLocations,
      });

      const loadLocationAction = loadLocationsActionCreator(mockLocations);

      const thunk = getLocationThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadLocationAction);
    });
  });

  describe("When invoked but the api responds with an error", () => {
    test("Then the error toast's method should be invoked", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockRejectedValue({});

      const thunk = getLocationThunk();

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});

describe("Given a addLocationsThunk function", () => {
  const dispatch = jest.fn();

  const locationData = {
    name: "Barceloneta",
    latitue: "41.38205539119927",
    longitude: "2.1855071615104342",
    description: "Barcelona's beach barrio",
    images: [],
  };
  describe("When invoked", () => {
    test("Then it should call the dispatch 2 times", async () => {
      const numberOfDispatchCalls = 2;

      axios.post = jest.fn().mockResolvedValue({
        data: mockLocations.features[0],
      });

      const thunk = addLocationThunk(locationData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(numberOfDispatchCalls);
    });
  });

  describe("When invoked but the api responds with an error", () => {
    test("Then the error toast's method should be invoked", async () => {
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = addLocationThunk(locationData);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});
