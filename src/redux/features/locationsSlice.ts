import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location, LocationsState } from "../../types/types";

const initialState: LocationsState = {
  name: "",
  tripId: "",
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
      ...locations,
      features: [...locations.features, action.payload],
    }),
    deleteLocation: (locations, action: PayloadAction<string>) => ({
      ...locations,
      features: locations.features.filter(
        (location) => location.id !== action.payload
      ),
    }),
  },
});

export const {
  loadLocations: loadLocationsActionCreator,
  addLocation: addLocationActionCreator,
  deleteLocation: deleteLocationActionCreator,
} = locationsSlice.actions;

export default locationsSlice.reducer;
