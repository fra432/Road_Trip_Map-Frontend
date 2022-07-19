import axios from "axios";
import { loadLoacationsActionCreator } from "../features/locationsSlice";
import { AppDispatch } from "../store/store";

export const getLocationThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      const { data } = await axios.get(`${url}locations/${userId}`);

      dispatch(loadLoacationsActionCreator(data));
    } catch (error: any) {
      return error.message;
    }
  };
