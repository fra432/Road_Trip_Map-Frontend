import axios from "axios";
import { mockToast } from "../../mocks/functionsMocks";
import { mockLocation } from "../../mocks/locationsMocks";
import { mockUserTrips } from "../../mocks/tripMocks";
import {
  deleteTripActionCreator,
  loadTripsActionCreator,
} from "../features/userTripsSlice";
import {
  addTripThunk,
  deleteTripThunk,
  getUserTripsThunk,
} from "./tripsThunks";

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

describe("Given a addTripThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch function 3 times", async () => {
      const expectedNumberOfDispatchCalls = 3;
      const dispatch = jest.fn();

      const tripId = "1";
      const formData = mockLocation;

      axios.post = jest.fn().mockResolvedValue({
        data: {
          new_trip: {
            id: tripId,
          },
        },
      });

      const thunk = addTripThunk(formData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfDispatchCalls);
    });
  });

  describe("When invoked and the api responds with an error", () => {
    test("Then it call the toast's error method", async () => {
      const dispatch = jest.fn();

      const formData = mockLocation;

      axios.post = jest.fn().mockRejectedValue({});

      const thunk = addTripThunk(formData);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});

describe("Given a getUserTripsThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch with the loadTripsActionCreator", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: {
          trips: mockUserTrips,
        },
      });

      const loadTripsAction = loadTripsActionCreator(mockUserTrips);

      const thunk = getUserTripsThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadTripsAction);
    });
  });

  describe("When invoked and the api responds with an error", () => {
    test("Then it call the toast's error method", async () => {
      const dispatch = jest.fn();

      axios.post = jest.fn().mockRejectedValue({});

      const thunk = getUserTripsThunk();

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteTripThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch with the deleteTripActionCreator", async () => {
      const dispatch = jest.fn();

      const tripId = "1";

      axios.delete = jest.fn().mockResolvedValue({
        status: 200,
      });

      const deleteTripAction = deleteTripActionCreator(tripId);

      const thunk = deleteTripThunk(tripId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(deleteTripAction);
    });
  });

  describe("When invoked and the api responds with an error", () => {
    test("Then it call the toast's error method", async () => {
      const dispatch = jest.fn();
      const tripId = "1";

      axios.delete = jest.fn().mockRejectedValue({});

      const thunk = deleteTripThunk(tripId);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});
