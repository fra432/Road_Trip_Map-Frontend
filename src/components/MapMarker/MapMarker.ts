import { useMapEvents } from "react-leaflet";
import {
  addCoordinatesActionCreator,
  openLocationFormActionCreator,
} from "../../redux/features/newLocationSlice";
import { useAppDispatch } from "../../redux/store/hooks";

const MapMarker = () => {
  const dispatch = useAppDispatch();

  useMapEvents({
    click: (event) => {
      const { lat, lng } = event.latlng;
      dispatch(addCoordinatesActionCreator([lat, lng]));
      dispatch(openLocationFormActionCreator());
    },
  });
  return null;
};

export default MapMarker;
