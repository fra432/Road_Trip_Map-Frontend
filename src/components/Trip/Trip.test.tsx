import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDispatch, mockNavigate } from "../../mocks/functionsMocks";
import store from "../../redux/store/store";
import Trip from "./Trip";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Trip function", () => {
  describe("When invoked with a 'Barcelona' trip in the props", () => {
    test("Then it should render a card with const a heading with the text 'Barcelona'", () => {
      const trip = {
        name: "Barcelona",
        image: "Barcelona.jpeg",
        id: "1",
      };
      const expectedText = "Barcelona";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Trip trip={trip} />
          </Provider>
        </BrowserRouter>
      );

      const cardHeading = screen.getByRole("heading", { name: expectedText });

      expect(cardHeading).toBeInTheDocument();
    });
  });

  describe("When invoked and the user click on it", () => {
    test("Then it should a dispatch and a navigate function", async () => {
      const trip = {
        name: "Barcelona",
        image: "Barcelona.jpeg",
        id: "1",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Trip trip={trip} />
          </Provider>
        </BrowserRouter>
      );

      const tripCard = screen.getByRole("listitem");

      userEvent.click(tripCard);

      await expect(mockDispatch).toHaveBeenCalled();
      await expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
