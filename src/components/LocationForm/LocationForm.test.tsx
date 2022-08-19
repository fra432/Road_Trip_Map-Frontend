import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDispatch } from "../../mocks/functionsMocks";
import store from "../../redux/store/store";
import LocationForm from "./LocationForm";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

beforeEach(() => {
  const addCoordinatesAction = {
    type: "newLocation/addCoordinates",
    payload: [41.92361022905565, 2.997855977247093],
  };

  store.dispatch(addCoordinatesAction);
});

describe("Given a LocationForm function", () => {
  describe("When invoked", () => {
    test("Then it should render a form 2 inputs a 'Add Location' button and a cancel icon", () => {
      const expectedNumberOfInputs = 2;
      const expectedButtonText = "Add Location";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LocationForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const addLocationButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const iconCancel = screen.getByTestId("icon-cancel");

      expect(inputs).toHaveLength(expectedNumberOfInputs);
      expect(addLocationButton).toBeInTheDocument();
      expect(iconCancel).toBeInTheDocument();
    });
  });

  describe("When invoked and the user fills the 'Location Name' input, add an image and clicks on the 'Add Location' button", () => {
    test("Then the dispatch function should be invoked", () => {
      const locationNameInputText = "Location Name";
      const expectedButtonText = "Add Location";
      const fakeFile = new File(["test"], "test.png", {
        type: "image/png",
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LocationForm />
          </Provider>
        </BrowserRouter>
      );

      const locationNameInput = screen.getByLabelText(locationNameInputText);
      const inputFile = screen.getByLabelText("Add Images");

      const addLocationButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      userEvent.type(locationNameInput, "Madrid");
      userEvent.upload(inputFile, fakeFile);
      userEvent.click(addLocationButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
