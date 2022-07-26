import axios from "axios";
import toast from "react-hot-toast";
import {
  addLocationActionCreator,
  loadLocationsActionCreator,
} from "../features/locationsSlice";
import { AppDispatch } from "../store/store";

export const getLocationThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      const { data } = await axios.get(`${url}locations/${userId}`);

      dispatch(loadLocationsActionCreator(data));
    } catch (error: any) {
      toast.error("Sorry, we were unable to find any favorite location");
      return error.message;
    }
  };

export const addLocationThunk =
  (formData: any, userId: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const {
        data: { new_location },
      } = await axios.post(`${url}locations/${userId}`, formData);

      await dispatch(addLocationActionCreator(new_location));
      dispatch(getLocationThunk(userId));
    } catch (error: any) {
      toast.error("Sorry, we were unable to add a new location");
      return error.message;
    }
  };
