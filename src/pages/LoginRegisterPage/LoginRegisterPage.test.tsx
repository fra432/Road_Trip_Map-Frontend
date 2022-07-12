import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginRegisterPage from "./LoginRegisterPage";
import React, { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Given a LoginRegisterPage component", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  });
  describe("When invoked", () => {
    test("Then it should render an image with the logo, and a heading with the text 'Helping travellers plan the most epic road trip.'", () => {
      const expectedAltText = "trippy logo";
      const expectedHeadingText =
        "Helping travellers plan the most epic road trip.";

      render(
        <BrowserRouter>
          <LoginRegisterPage />
        </BrowserRouter>
      );

      const logo = screen.getByAltText(expectedAltText);
      const heading = screen.getByText(expectedHeadingText);

      expect(logo).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });

  describe("When invoked and 8 seconds pass", () => {
    test("Then the setCoverImage function should be invoked", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setInterval");

      render(
        <BrowserRouter>
          <LoginRegisterPage />
        </BrowserRouter>
      );

      jest.advanceTimersByTime(12000);

      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalled();
    });
  });
});
