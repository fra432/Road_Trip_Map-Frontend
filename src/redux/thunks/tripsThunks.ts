import axios from "axios";
import toast from "react-hot-toast";
import { ITrip } from "../../types/types";
import { AppDispatch } from "../store/store";
import { getLocationsThunk } from "./locationsThunks";

export const addTripThunk =
  (formData: ITrip) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

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
