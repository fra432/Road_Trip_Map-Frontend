import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationState, LocationInfo } from "../../types/types";

const initialState: LocationState = {
  infoModalOpen: false,
  locationInfo: {
    name: "",
    description: "",
    images: [],
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    loadLocation: (location, action: PayloadAction<LocationInfo>) => ({
      infoModalOpen: true,
      locationInfo: { ...action.payload },
    }),
    closeInfoModal: (location) => ({
      ...location,
      infoModalOpen: false,
    }),
  },
});

export const {
  loadLocation: loadLocationActionCreator,
  closeInfoModal: closeInfoModalActionCreator,
} = locationSlice.actions;

export default locationSlice.reducer;
