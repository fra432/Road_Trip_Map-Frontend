import { mockDispatch, mockToast } from "../../mocks/functionsMocks";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginRegisterForm from "./LoginRegisterForm";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

jest.mock("react-hot-toast", () => ({
  ...jest.requireActual("react-hot-toast"),
  dismiss: mockToast,
  error: mockToast,
}));

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

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

  describe("When invoked and the user clicks on the Register field and then on the Login field", () => {
    test("Then it should render the form title text 'Login Here'", () => {
      const expectedFormTitle = "Login Here";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginRegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const registerField = screen.getByText("Register");

      userEvent.click(registerField);

      const loginField = screen.getByText("Login");

      userEvent.click(loginField);

      const formTitle = screen.getByText(expectedFormTitle);

      expect(formTitle).toBeInTheDocument();
    });
  });

  describe("When invoked and the user fills the email and password fields and clicks on the 'Login' button", () => {
    test("Then the dispatch function should be invoked", () => {
      const expectedButtonText = "Login";
      const emailText = "fra@gmail.com";
      const passwordText = "12345";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginRegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const emailField = screen.getByLabelText("Email");
      const passwordField = screen.getByLabelText("Password");

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      userEvent.type(emailField, emailText);
      userEvent.type(passwordField, passwordText);
      userEvent.click(loginButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user fills the email and password fields and clicks on the 'Login' button, but the email does not contain a '@'", () => {
    test("Then the toast error method should be invoked", () => {
      const expectedButtonText = "Login";
      const emailText = "fragmail.com";
      const passwordText = "12345";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginRegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const emailField = screen.getByLabelText("Email");
      const passwordField = screen.getByLabelText("Password");

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      userEvent.type(emailField, emailText);
      userEvent.type(passwordField, passwordText);
      userEvent.click(loginButton);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});
