import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrip, UserTrips } from "../../types/types";

const initialState: UserTrips = {
  userTrips: [],
  openTripForm: false,
};

const userTripsSlice = createSlice({
  name: "userTrips",
  initialState,
  reducers: {
    loadTrips: (userTrips, action: PayloadAction<ITrip[]>) => ({
      ...userTrips,
      userTrips: [...action.payload],
    }),
    openTripForm: (userTrips) => ({
      ...userTrips,
      openTripForm: true,
    }),
    closeTripForm: (userTrips) => ({
      ...userTrips,
      openTripForm: false,
    }),
  },
});

export const {
  loadTrips: loadTripsActionCreator,
  openTripForm: openTripFormActionCreator,
  closeTripForm: closeTripFormActionCreator,
} = userTripsSlice.actions;

export default userTripsSlice.reducer;
