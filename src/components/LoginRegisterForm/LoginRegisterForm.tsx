import LoginRegisterFormStyled from "./LoginRegisterFormStyled";
import { BiUserCircle, BiEdit } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";

const LoginRegisterForm = (): JSX.Element => {
  const [register, setRegister] = useState<boolean>(false);

  const switchToRegister = () => {
    setRegister(true);
  };

  const switchToLogin = () => {
    setRegister(false);
  };

  return (
    <LoginRegisterFormStyled>
      <div className="form-container">
        <div className="image-container"></div>
        <div className="toggle-container">
          <div
            className={`toggle ${!register ? "active" : ""}`}
            onClick={switchToLogin}
          >
            <BiUserCircle size={40} />
            <span>Login</span>
          </div>
          <div
            className={`toggle ${register ? "active" : ""}`}
            onClick={switchToRegister}
          >
            <BiEdit size={40} />
            <span>Register</span>
          </div>
        </div>
        <form className="form">
          <h3 className="form-title">{`${
            register ? "Register" : "Login"
          } Here`}</h3>
          <label className="hidden" htmlFor="email">
            Email
          </label>
          <div className="wrapper">
            <MdOutlineEmail className="icon" />
            <input
              formNoValidate
              autoComplete="off"
              placeholder="Email"
              id="email"
              type="text"
            />
          </div>
          <label className="hidden" htmlFor="username">
            Username
          </label>
          {register && (
            <div className="wrapper">
              <BiUserCircle className="icon" />
              <input
                formNoValidate
                autoComplete="off"
                placeholder="Username"
                id="username"
                type="text"
              />
            </div>
          )}
          <label className="hidden" htmlFor="password">
            Password
          </label>
          <div className="wrapper">
            <RiLockPasswordLine className="icon" />
            <input
              formNoValidate
              autoComplete="off"
              placeholder="Password"
              id="password"
              type="password"
            />
          </div>
          <button className="button" type="submit">
            {register ? "Register" : "Login"}
          </button>
        </form>
      </div>
    </LoginRegisterFormStyled>
  );
};

export default LoginRegisterForm;
