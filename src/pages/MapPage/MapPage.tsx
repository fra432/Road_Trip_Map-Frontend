import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Map from "../../components/Map/Map";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getLocationsThunk } from "../../redux/thunks/locationsThunks";
import MapPageStyled from "./MapPageStyled";
import { GiCancel } from "react-icons/gi";
import { deleteTripThunk } from "../../redux/thunks/tripsThunks";
import { Button, Modal } from "react-bootstrap";

const MapPage = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.locations);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { tripId } = useParams();

  useLayoutEffect(() => {
    dispatch(getLocationsThunk(tripId as string));
  }, [dispatch, tripId]);

  const deleteTrip = () => {
    dispatch(deleteTripThunk(tripId as string));
    handleClose();
    navigate("/my_trips");
  };

  return (
    <MapPageStyled>
      <div className="page-content">
        <h1 className="trip-name">{name}</h1>
        <Map />
        <GiCancel
          size={35}
          className="icon icon--cancel"
          onClick={handleShow}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete this trip?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteTrip}>
            Delete Trip
          </Button>
        </Modal.Footer>
      </Modal>
    </MapPageStyled>
  );
};

export default MapPage;
