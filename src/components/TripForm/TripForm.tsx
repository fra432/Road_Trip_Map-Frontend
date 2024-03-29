import Form from "react-bootstrap/Form";
import { closeTripFormActionCreator } from "../../redux/features/userTripsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { GiCancel } from "react-icons/gi";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import LocationFormStyled from "../LocationForm/LocationFormStyled";
import { addTripThunk } from "../../redux/thunks/tripsThunks";
import { useNavigate } from "react-router-dom";

const TripForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { tripId } = useAppSelector((state) => state.locations);

  const blankData: { name: string; image: string } = {
    name: "",
    image: "",
  };

  const [formData, setFormData] = useState(blankData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? (event.target as HTMLInputElement).files?.[0] || ""
          : event.target.value,
    });
  };

  const closeTripForm = () => {
    dispatch(closeTripFormActionCreator());
    clearData();
  };

  const clearData = () => {
    setFormData(blankData);
  };

  const refTripId = useRef(tripId);

  const submitTrip = async (event: React.FormEvent) => {
    event.preventDefault();

    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("image", formData.image);

    await dispatch(addTripThunk(newFormData));
    clearData();
    closeTripForm();
  };

  useEffect(() => {
    if (refTripId.current !== tripId) {
      navigate(`/map/${tripId}`);
    }
  }, [navigate, tripId]);

  return (
    <LocationFormStyled>
      <Form onSubmit={submitTrip} className="form">
        <Form.Label htmlFor="name">Trip Name</Form.Label>
        <Form.Control
          formNoValidate
          autoComplete="off"
          id="name"
          type="text"
          className="name"
          required={true}
          maxLength={30}
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Label htmlFor="image">Add Image</Form.Label>
        <Form.Control
          id="image"
          accept="image/*"
          type="file"
          onChange={handleChange}
        />
        <div className="buttons">
          <GiCancel
            data-testid="icon-close"
            size={35}
            className="icon icon--close"
            onClick={closeTripForm}
          />
          <Button type="submit" className="button button--submit">
            Add Trip
          </Button>
        </div>
      </Form>
    </LocationFormStyled>
  );
};

export default TripForm;
