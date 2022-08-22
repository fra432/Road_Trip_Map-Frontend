import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDispatch, mockNavigate } from "../../mocks/functionsMocks";
import store from "../../redux/store/store";
import TripForm from "./TripForm";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Trip Form function", () => {
  describe("When invoked", () => {
    test("Then it should render 1 'Trip Name' input, 1 'close' icon and a button with the text 'Add Trip'", () => {
      const expectedInputName = "Trip Name";
      const expectedButtonText = "Add Trip";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripForm />
          </Provider>
        </BrowserRouter>
      );

      const tripNameInput = screen.getByLabelText(expectedInputName);
      const addTripButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const closeIcon = screen.getByTestId("icon-close");

      expect(tripNameInput).toBeInTheDocument();
      expect(addTripButton).toBeInTheDocument();
      expect(closeIcon).toBeInTheDocument();
    });
  });

  describe("When invoked and the user fills the 'Trip Name' field, uploads a picture and press on the 'Add Trip' button", () => {
    test("Then it should call the dispatch function and one the tripId updates it should call the navigate function", async () => {
      const expectedInputName = "Trip Name";
      const expectedButtonText = "Add Trip";
      const fakeFile = new File(["test"], "test.png", {
        type: "image/png",
      });

      const loadNewTripAction = {
        type: "locations/loadLocations",
        payload: {
          name: "Barcelona",
          tripId: "63025452e46546c114c9a01a",
          features: [],
        },
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripForm />
          </Provider>
        </BrowserRouter>
      );

      const tripNameInput = screen.getByLabelText(expectedInputName);
      const addTripButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const inputFile = screen.getByLabelText("Add Image");

      userEvent.type(tripNameInput, "Barcelona");
      userEvent.upload(inputFile, fakeFile);
      userEvent.click(addTripButton);

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        store.dispatch(loadNewTripAction);
      });

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
