import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrip, UserTrips } from "../../types/types";

const initialState: UserTrips = {
  userTrips: [],
};

const userTripsSlice = createSlice({
  name: "userTrips",
  initialState,
  reducers: {
    loadTrips: (userTrips, action: PayloadAction<ITrip[]>) => ({
      userTrips: [...action.payload],
    }),
  },
});

export const { loadTrips: loadTripsActionCreator } = userTripsSlice.actions;

export default userTripsSlice.reducer;
