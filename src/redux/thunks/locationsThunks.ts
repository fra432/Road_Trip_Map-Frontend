import axios from "axios";
import toast from "react-hot-toast";
import { loadLocationActionCreator } from "../features/locationSlice";
import {
  addLocationActionCreator,
  loadLocationsActionCreator,
  deleteLocationActionCreator,
} from "../features/locationsSlice";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL;

export const getLocationsThunk =
  (tripId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());

      const { data } = await axios.get(`${url}trips/${tripId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(loadLocationsActionCreator(data));
      dispatch(setLoadingOffActionCreator());
    } catch (error: any) {
      toast.error("Sorry, we were unable to find any favorite location");
      return error.message;
    }
  };

export const addLocationThunk =
  (formData: any, tripId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());

      const {
        data: { new_location },
      } = await axios.post(`${url}locations/${tripId}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      await dispatch(addLocationActionCreator(new_location));
      dispatch(getLocationsThunk(tripId));
      dispatch(setLoadingOffActionCreator());
    } catch (error: any) {
      toast.error("Sorry, we were unable to add a new location");
      return error.message;
    }
  };

export const deleteLocationThunk =
  (locationId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());

      const { status } = await axios.delete(`${url}locations/${locationId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      if (status === 200) {
        await dispatch(deleteLocationActionCreator(locationId));
        dispatch(setLoadingOffActionCreator());
      }
    } catch (error: any) {
      toast.error("Sorry, we were unable to delete this location");
      return error.message;
    }
  };

export const getLocationByIdThunk =
  (locationId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());

      const {
        data: { location: locationInfo },
      } = await axios.get(`${url}locations/${locationId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(loadLocationActionCreator(locationInfo));
      dispatch(setLoadingOffActionCreator());
    } catch (error: any) {
      toast.error("Unable to load location info");
      return error.message;
    }
  };
