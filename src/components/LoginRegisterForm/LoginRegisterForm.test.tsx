import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginRegisterForm from "./LoginRegisterForm";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a LoginRegisterForm component", () => {
  describe("When invoked", () => {
    test("Then it should render 2 input field and a button wth the text 'Login'", () => {
      const expectedButtonText = "Login";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginRegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const inputEmail = screen.getByLabelText("Email");
      const inputPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(inputEmail).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on the Register field", () => {
    test("Then it should render 3 input fields and a button wth the text 'Register'", () => {
      const expectedButtonText = "Register";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginRegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const registerField = screen.getByText("Register");

      userEvent.click(registerField);

      const inputEmail = screen.getByLabelText("Email");
      const inputUsername = screen.getByLabelText("Username");
      const inputPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(inputEmail).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
