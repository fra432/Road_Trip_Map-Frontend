import { useEffect, useState } from "react";
import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import LoginRegisterPageStyled from "./LoginRegisterPageStyled";

const LoginRegisterPage = (): JSX.Element => {
  const [coverImage, setCoverImage] = useState("/images/background1.jpeg");

  useEffect(() => {
    const images = [
      "background1.jpeg",
      "background2.jpeg",
      "background3.jpeg",
      "background4.jpeg",
      "background5.jpeg",
      "background6.jpeg",
    ];

    const intervalId = setInterval(() => {
      setCoverImage(
        `/images/${images[Math.floor(Math.random() * images.length)]}`
      );
    }, 8000);

    return () => clearInterval(intervalId);
  });

  return (
    <LoginRegisterPageStyled background={coverImage}>
      <header>
        <img src="trippy_logo.webp" alt="trippy logo" className="logo" />
        <h1 className="title">
          Helping travellers plan the most epic road trip.
        </h1>
      </header>
      <LoginRegisterForm />
      <span className="description">
        Turn your road trip into an adventure. Build your route in Trippy and
        then use our turn-by-turn navigation to lead the way. Plan your road
        trip with friends, you're always 5 minutes away from something awesome!
      </span>
    </LoginRegisterPageStyled>
  );
};

export default LoginRegisterPage;
