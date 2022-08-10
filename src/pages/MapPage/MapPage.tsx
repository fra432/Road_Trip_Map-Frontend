import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Map from "../../components/Map/Map";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getLocationsThunk } from "../../redux/thunks/locationsThunks";
import MapPageStyled from "./MapPageStyled";
import { GiCancel } from "react-icons/gi";
import { deleteTripThunk } from "../../redux/thunks/tripsThunks";
import { Button, Modal } from "react-bootstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

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

  const navigateToMyTrips = () => {
    navigate("/my_trips");
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <MapPageStyled>
      <div className="page-content">
        <h1 className="trip-name">{name}</h1>
        <Map />
        <div className="user-options">
          <div className="user-option">
            <FaMapMarkedAlt
              size={35}
              className="user-option__icon"
              onClick={navigateToMyTrips}
            />
            <span className="user-option__title">My Trips</span>
          </div>
          <div className="user-option">
            <GiCancel
              size={35}
              className="user-option__icon"
              onClick={handleShow}
            />
            <span className="user-option__title">Delete</span>
          </div>
          <div className="user-option">
            <AiFillHome
              size={35}
              className="user-option__icon"
              onClick={navigateToHome}
            />
            <span className="user-option__title">Home</span>
          </div>
        </div>
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
