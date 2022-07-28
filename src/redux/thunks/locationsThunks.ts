import axios from "axios";
import toast from "react-hot-toast";
import {
  addLocationActionCreator,
  loadLocationsActionCreator,
  deleteLocationActionCreator,
} from "../features/locationsSlice";
import { AppDispatch } from "../store/store";

export const getLocationThunk = () => async (dispatch: AppDispatch) => {
  const url = process.env.REACT_APP_API_URL;
  try {
    const { data } = await axios.get(`${url}locations/`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });

    dispatch(loadLocationsActionCreator(data));
  } catch (error: any) {
    toast.error("Sorry, we were unable to find any favorite location");
    return error.message;
  }
};

export const addLocationThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const {
        data: { new_location },
      } = await axios.post(`${url}locations/`, formData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      await dispatch(addLocationActionCreator(new_location));
      dispatch(getLocationThunk());
    } catch (error: any) {
      toast.error("Sorry, we were unable to add a new location");
      return error.message;
    }
  };

export const deleteLocationThunk =
  (locationId: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const { status } = await axios.delete(`${url}locations/${locationId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      if (status === 200) {
        await dispatch(deleteLocationActionCreator(locationId));
      }
    } catch (error: any) {
      toast.error("Sorry, we were unable to delete this location");
      return error.message;
    }
  };
