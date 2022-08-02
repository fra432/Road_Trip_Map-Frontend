import Form from "react-bootstrap/Form";
import { closeLocationFormActionCreator } from "../../redux/features/newLocationSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import { GiCancel } from "react-icons/gi";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { ITrip } from "../../types/types";
import { addLocationThunk } from "../../redux/thunks/locationsThunks";
import LocationFormStyled from "../LocationForm/LocationFormStyled";

const TripForm = () => {
  const dispatch = useAppDispatch();

  const blankData: ITrip = {
    name: "",
    image: "",
  };

  const [formData, setFormData] = useState(blankData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const closeLocationForm = () => {
    dispatch(closeLocationFormActionCreator());
    clearData();
  };

  const clearData = () => {
    setFormData(blankData);
  };

  const submitTrip = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(addLocationThunk(formData));
    clearData();
    closeLocationForm();
  };

  return (
    <LocationFormStyled>
      <Form onSubmit={submitTrip} className="form">
        <Form.Label htmlFor="name">Location Name</Form.Label>
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
        <Form.Label htmlFor="image">Image URL</Form.Label>
        <Form.Control
          formNoValidate
          autoComplete="off"
          id="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />
        <div className="buttons">
          <GiCancel
            size={35}
            className="icon icon--close"
            onClick={closeLocationForm}
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
