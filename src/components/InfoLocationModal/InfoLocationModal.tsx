import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { closeInfoModalActionCreator } from "../../redux/features/locationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { deleteLocationThunk } from "../../redux/thunks/locationsThunks";
import InfoLocationModalStyled from "./InfoLocationModalStyled";

const InfoLocationModal = () => {
  const dispatch = useAppDispatch();
  const {
    locationInfo: { id, name, description, images },
  } = useAppSelector((state) => state.location);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeInfoLocationModal = () => {
    dispatch(closeInfoModalActionCreator());
  };

  const deleteLocation = () => {
    dispatch(deleteLocationThunk(id));
    closeInfoLocationModal();
  };

  return (
    <InfoLocationModalStyled>
      <div className="location">
        <h1 className="location__name">{name}</h1>
        {description && <span className="line"></span>}
        {description && <p className="location__description">{description}</p>}
        <span className="line"></span>
        {images && (
          <CCarousel controls indicators transition="crossfade">
            {images.map((image, position) => {
              return (
                <CCarouselItem key={position}>
                  <CImage className="d-block w-100" src={image} alt={name} />
                </CCarouselItem>
              );
            })}
          </CCarousel>
        )}
        <BsX
          data-testid="icon-close"
          size={25}
          className="icon icon--close"
          onClick={closeInfoLocationModal}
        />
        <div className="user-option">
          <GiCancel
            data-testid="icon-delete"
            size={35}
            className="icon icon--cancel"
            onClick={handleShow}
          />
          <span className="user-option__title">Delete</span>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete this location?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteLocation}>
            Delete Location
          </Button>
        </Modal.Footer>
      </Modal>
    </InfoLocationModalStyled>
  );
};

export default InfoLocationModal;
