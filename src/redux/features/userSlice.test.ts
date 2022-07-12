import { mockUserLogin } from "../../mocks/userMock";
import userSlice, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an initial user status and a login action with the login user credentials", () => {
    test("Then it should return with the received user credential and the logged property set to true", () => {
      const initialStatus = {
        userInfo: {
          username: "",
          id: "",
        },
        logged: false,
      };

      const expectedStatus = {
        userInfo: mockUserLogin,
        logged: true,
      };

      const userInfo = mockUserLogin;

      const loginAction = loginActionCreator(userInfo);

      const userStatus = userSlice(initialStatus, loginAction);

      expect(userStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an inital user status with user inofs and a logout action", () => {
    test("Then it should return the new empty state and the logged property set to false", () => {
      const initialStatus = {
        userInfo: mockUserLogin,
        logged: true,
      };

      const expectedStatus = {
        userInfo: {
          username: "",
          id: "",
        },
        logged: false,
      };

      const logoutAction = logoutActionCreator();

      const userStatus = userSlice(initialStatus, logoutAction);

      expect(userStatus).toEqual(expectedStatus);
    });
  });
});
