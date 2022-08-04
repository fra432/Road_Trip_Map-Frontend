import Form from "react-bootstrap/Form";
import { closeTripFormActionCreator } from "../../redux/features/userTripsSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import { GiCancel } from "react-icons/gi";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { ITrip } from "../../types/types";
import LocationFormStyled from "../LocationForm/LocationFormStyled";
import { addTripThunk } from "../../redux/thunks/tripsThunks";
import { useNavigate } from "react-router-dom";

const TripForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const blankData: ITrip = {
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

  const submitTrip = (event: React.FormEvent) => {
    event.preventDefault();

    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("image", formData.image);

    dispatch(addTripThunk(newFormData));
    clearData();
    closeTripForm();
    navigate("/map");
  };

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
          maxLength={20}
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Label htmlFor="image">Add image</Form.Label>
        <Form.Control
          id="image"
          accept="image/*"
          type="file"
          onChange={handleChange}
        />
        <div className="buttons">
          <GiCancel
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
