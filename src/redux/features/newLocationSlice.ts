import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewLocation } from "../../types/types";

const initialState: NewLocation = {
  openLocationForm: false,
  coordinates: [],
};

const newLocationSlice = createSlice({
  name: "newLocation",
  initialState,
  reducers: {
    addCoordinates: (newLocation, action: PayloadAction<number[]>) => ({
      ...newLocation,
      coordinates: [...action.payload],
    }),
    openLocationForm: (newLocation) => ({
      ...newLocation,
      openLocationForm: true,
    }),
    closeLocationForm: (newLocation) => ({
      ...newLocation,
      openLocationForm: false,
    }),
  },
});

export const {
  openLocationForm: openLocationFormActionCreator,
  closeLocationForm: closeLocationFormActionCreator,
  addCoordinates: addCoordinatesActionCreator,
} = newLocationSlice.actions;

export default newLocationSlice.reducer;
