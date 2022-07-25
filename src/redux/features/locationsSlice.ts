import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location, LocationsState } from "../../types/types";

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
    addLocation: (locations, action: PayloadAction<Location>) => ({
      features: [...locations.features, action.payload],
    }),
  },
});

export const {
  loadLocations: loadLoacationsActionCreator,
  addLocation: addLocationActionCreator,
} = locationsSlice.actions;

export default locationsSlice.reducer;
