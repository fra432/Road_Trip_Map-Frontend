import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDispatch } from "../../mocks/functionsMocks";
import store from "../../redux/store/store";
import InfoLocationModal from "./InfoLocationModal";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

beforeEach(() => {
  const loadLocationAction = {
    type: "location/loadLocation",
    payload: {
      id: "62fa5bea647b90701acdc04f",
      name: "San Pol De Mar",
      description: "Costa Brava's see location",
      images: ["https://cmsmultimedia.catalunya.com/mds/multimedia/540847/F1/"],
    },
  };

  store.dispatch(loadLocationAction);
});

describe("Given a InfoLocationModal function component", () => {
  describe("When invoked with the 'San Pol De Mar' location", () => {
    test("Then it should render an heading with a text 'San Pol De Mar' and a description paragraph with the text 'Costa Brava's see location'", () => {
      const expectedHeadingText = "San Pol De Mar";
      const expectedParagraphText = "Costa Brava's see location";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <InfoLocationModal />
          </Provider>
        </BrowserRouter>
      );

      const locationName = screen.getByRole("heading", {
        name: expectedHeadingText,
      });
      const locationDescription = screen.getByText(expectedParagraphText);

      expect(locationName).toBeInTheDocument();
      expect(locationDescription).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on the 'cancel' icon and then on", () => {
    test("Then it should render a modal with the text 'Are you sure you want to delete this location?'", () => {
      const expectedModalText =
        "Are you sure you want to delete this location?";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <InfoLocationModal />
          </Provider>
        </BrowserRouter>
      );

      const iconDelete = screen.getByTestId("icon-delete");

      userEvent.click(iconDelete);

      const modalText = screen.getByText(expectedModalText);

      expect(modalText).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on the 'Delete Location' icon that shows up on the modal", () => {
    test("Then it should call the dispatch function", () => {
      const expectedButtonText = "Delete Location";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <InfoLocationModal />
          </Provider>
        </BrowserRouter>
      );

      const iconDelete = screen.getByTestId("icon-delete");

      userEvent.click(iconDelete);

      const buttonDelete = screen.getByRole("button", {
        name: expectedButtonText,
      });

      userEvent.click(buttonDelete);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user clicks on the 'close'", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <InfoLocationModal />
          </Provider>
        </BrowserRouter>
      );

      const iconClose = screen.getByTestId("icon-close");

      userEvent.click(iconClose);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
