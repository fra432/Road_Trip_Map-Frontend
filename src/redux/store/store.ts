import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/locationSlice";
import locationsReducer from "../features/locationsSlice";
import newLocationReducer from "../features/newLocationSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    locations: locationsReducer,
    newLocation: newLocationReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
