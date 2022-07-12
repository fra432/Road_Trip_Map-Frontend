import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";

interface State {
  userInfo: IUser;
  logged: boolean;
}

const initialState: State = {
  userInfo: {
    username: "",
    id: "",
  },
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<IUser>) => ({
      userInfo: { ...action.payload },
      logged: true,
    }),
    logout: (user) => ({
      userInfo: {
        username: "",
        id: "",
      },
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
