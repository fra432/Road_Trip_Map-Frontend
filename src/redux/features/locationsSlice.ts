import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationsState } from "../../types/types";

const initialState: LocationsState = {
  features: [],
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    loadLocations: (locations, action: PayloadAction<LocationsState>) => ({
      ...action.payload,
    }),
  },
});

export const { loadLocations: loadLoacationsActionCreator } =
  locationsSlice.actions;

export default locationsSlice.reducer;
