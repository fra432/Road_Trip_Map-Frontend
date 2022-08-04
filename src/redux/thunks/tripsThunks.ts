import axios from "axios";
import toast from "react-hot-toast";
import { loadTripsActionCreator } from "../features/userTripsSlice";
import { AppDispatch } from "../store/store";
import { getLocationsThunk } from "./locationsThunks";

const url = process.env.REACT_APP_API_URL;

export const addTripThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: {
          new_trip: { id },
        },
      } = await axios.post(`${url}trips`, formData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(getLocationsThunk(id));
    } catch (error: any) {
      toast.error("Sorry, we were unable to add a new trip");
      return error.message;
    }
  };

export const getUserTripsThunk = () => async (dispatch: AppDispatch) => {
  try {
    const {
      data: { trips },
    } = await axios.get(`${url}trips/`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });

    dispatch(loadTripsActionCreator(trips));
  } catch (error: any) {
    toast.error("Sorry, we were unable to load your trips");
    return error.message;
  }
};
