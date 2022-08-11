import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/locationSlice";
import locationsReducer from "../features/locationsSlice";
import newLocationReducer from "../features/newLocationSlice";
import uiReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";
import userTripsReducer from "../features/userTripsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    locations: locationsReducer,
    newLocation: newLocationReducer,
    location: locationReducer,
    userTrips: userTripsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
