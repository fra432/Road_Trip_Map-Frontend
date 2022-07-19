import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { DecodeToken, ResponseApiLogin, UserLogin } from "../../types/types";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

const loginThunk = (userData: UserLogin) => async (dispatch: AppDispatch) => {
  const url = process.env.REACT_APP_API_URL;

  try {
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

export default loginThunk;
