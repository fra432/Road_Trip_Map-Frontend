import Form from "react-bootstrap/Form";
import { closeLocationFormActionCreator } from "../../redux/features/newLocationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import LocationFormStyled from "./LocationFormStyled";
import { GiCancel } from "react-icons/gi";
import { Button } from "react-bootstrap";
import { ChangeEvent, useState } from "react";
import { ILocationForm } from "../../types/types";
import { addLocationThunk } from "../../redux/thunks/locationsThunks";
/* import { addLocationThunk } from "../../redux/thunks/locationsThunks"; */

const LocationForm = () => {
  const dispatch = useAppDispatch();
  const { coordinates } = useAppSelector((state) => state.newLocation);
  const { tripId } = useAppSelector((state) => state.locations);

  const blankData: ILocationForm = {
    name: "",
    description: "",
    images: [],
  };

  const [formData, setFormData] = useState(blankData);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    setFormData({
      ...formData,
      images: files ? Array.from(files) : [],
    });
  };

  const closeLocationForm = () => {
    dispatch(closeLocationFormActionCreator());
    clearData();
  };

  const clearData = () => {
    setFormData(blankData);
  };

  const submitLocation = (event: React.FormEvent) => {
    event.preventDefault();

    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("description", formData?.description || "");
    newFormData.append("latitude", coordinates[0].toString());
    newFormData.append("longitude", coordinates[1].toString());
    if (formData.images !== []) {
      formData.images.forEach((image) => {
        newFormData.append("image", image);
      });
    }

    dispatch(addLocationThunk(newFormData, tripId));
    clearData();
    closeLocationForm();
  };

  return (
    <LocationFormStyled>
      <Form onSubmit={submitLocation} className="form">
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
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          cols={20}
          rows={7}
          maxLength={200}
          className="form-control"
          value={formData.description}
          onChange={handleChange}
        />
        <Form.Label htmlFor="images">Add images</Form.Label>
        <Form.Control
          id="images"
          accept="image/*"
          type="file"
          multiple
          onChange={handleImageChange}
        />
        <div className="buttons">
          <GiCancel
            size={35}
            className="icon icon--close"
            onClick={closeLocationForm}
          />
          <Button type="submit" className="button button--submit">
            Add Location
          </Button>
        </div>
      </Form>
    </LocationFormStyled>
  );
};

export default LocationForm;
