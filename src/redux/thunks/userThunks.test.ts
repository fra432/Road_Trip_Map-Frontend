import axios from "axios";
import { mockToast } from "../../mocks/functionsMocks";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "test",
  id: "1234",
}));

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

describe("Given a loginThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();

      const mockToken = "token";

      const userData = {
        email: "test@mail.com",
        password: "1234",
      };

      axios.post = jest.fn().mockResolvedValue({
        status: 200,
        data: {
          token: mockToken,
        },
      });

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with user credentials and there's no match in the database", () => {
    test("Then the error toast method should be invoked", async () => {
      const dispatch = jest.fn();

      const userData = {
        email: "test@mail.com",
        password: "1234",
      };

      axios.post = jest.fn().mockRejectedValue({});

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});

describe("Given a registerThunk function", () => {
  const userData = {
    email: "test@mail.com",
    username: "test",
    password: "1234",
  };
  describe("When invoked", () => {
    test("Then it should call the dispatch function 3 times", async () => {
      const expectedNumberOfDispatchCalls = 3;
      const dispatch = jest.fn();

      axios.post = jest.fn().mockResolvedValue({
        status: 201,
      });

      const thunk = registerThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfDispatchCalls);
    });
  });

  describe("When invoked with user credentials and there's no match in the database", () => {
    test("Then the error toast method should be invoked", async () => {
      const dispatch = jest.fn();

      axios.post = jest.fn().mockRejectedValue({});

      const thunk = registerThunk(userData);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});
