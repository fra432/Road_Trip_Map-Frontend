import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import {
  DecodeToken,
  ResponseApiLogin,
  UserLogin,
  UserRegister,
} from "../../types/types";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      dispatch(setLoadingOnActionCreator());
      const {
        status,
        data: { token },
      }: ResponseApiLogin = await axios.post(`${url}user/login`, userData);

      if (status === 200) {
        const { username, id }: DecodeToken = jwtDecode(token);

        const userInfo = {
          username,
          id,
        };

        dispatch(setLoadingOffActionCreator());

        dispatch(loginActionCreator(userInfo));
        localStorage.setItem("token", token);
        toast.success("Successfully logged in");
        return status;
      }
    } catch (error: any) {
      toast.error("Wrong username or password");
      return error.message;
    }
  };

export const registerThunk =
  (userData: UserRegister) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      dispatch(setLoadingOnActionCreator());

      const { status }: ResponseApiLogin = await axios.post(
        `${url}user/register`,
        userData
      );

      if (status === 201) {
        const { email, password } = userData;

        dispatch(loginThunk({ email, password }));
        dispatch(setLoadingOffActionCreator());

        return status;
      }
    } catch (error: any) {
      toast.error("Sorry, something went wrong");
      return error.message;
    }
  };
