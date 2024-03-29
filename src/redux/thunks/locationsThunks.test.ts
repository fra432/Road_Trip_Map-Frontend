import axios from "axios";
import { mockToast } from "../../mocks/functionsMocks";
import { mockLocation, mockLocations } from "../../mocks/locationsMocks";
import {
  addLocationThunk,
  deleteLocationThunk,
  getLocationByIdThunk,
  getLocationsThunk,
} from "./locationsThunks";
import {
  loadLocationsActionCreator,
  deleteLocationActionCreator,
} from "../features/locationsSlice";
import { loadLocationActionCreator } from "../features/locationSlice";

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

describe("Given a getLocationsThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch function whith the loadLoactionActionCreator", async () => {
      const dispatch = jest.fn();
      const tripId = "1";
      const name = "Barcelona";

      axios.get = jest.fn().mockResolvedValue({
        data: {
          name,
          tripId,
          features: mockLocations.features,
        },
      });

      const loadLocationAction = loadLocationsActionCreator(mockLocations);

      const thunk = getLocationsThunk(tripId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadLocationAction);
    });
  });

  describe("When invoked but the api responds with an error", () => {
    test("Then the error toast's method should be invoked", async () => {
      const dispatch = jest.fn();
      const tripId = "1";

      axios.get = jest.fn().mockRejectedValue({});

      const thunk = getLocationsThunk(tripId);

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
    test("Then it should call the dispatch 4 times", async () => {
      const numberOfDispatchCalls = 4;
      const tripId = "1";

      axios.post = jest.fn().mockResolvedValue({
        data: mockLocations.features[0],
      });

      const thunk = addLocationThunk(locationData, tripId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(numberOfDispatchCalls);
    });
  });

  describe("When invoked but the api responds with an error", () => {
    test("Then the error toast's method should be invoked", async () => {
      axios.post = jest.fn().mockRejectedValue({});
      const tripId = "1";

      const thunk = addLocationThunk(locationData, tripId);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteLocationsThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch function whith the deleteLoactionActionCreator", async () => {
      const dispatch = jest.fn();

      const locationId = "1";

      axios.delete = jest.fn().mockResolvedValue({
        status: 200,
      });

      const deleteLocationAction = deleteLocationActionCreator(locationId);

      const thunk = deleteLocationThunk(locationId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(deleteLocationAction);
    });
  });

  describe("When invoked and the api responds with an error", () => {
    test("Then it should call the toast's error methos", async () => {
      const dispatch = jest.fn();

      const locationId = "1";

      axios.delete = jest.fn().mockRejectedValue({});

      const thunk = deleteLocationThunk(locationId);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});

describe("Given a getLocationByIdThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch function whith the loadLoactionActionCreator", async () => {
      const dispatch = jest.fn();

      const locationId = "1219";

      axios.get = jest.fn().mockResolvedValue({
        data: {
          location: mockLocation,
        },
      });

      const loadLocationAction = loadLocationActionCreator(mockLocation);

      const thunk = getLocationByIdThunk(locationId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadLocationAction);
    });
  });

  describe("When invoked and the api responds with an error", () => {
    test("Then it should call the toast's error methos", async () => {
      const dispatch = jest.fn();

      const locationId = "1219";

      axios.get = jest.fn().mockRejectedValue({});

      const thunk = getLocationByIdThunk(locationId);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});
