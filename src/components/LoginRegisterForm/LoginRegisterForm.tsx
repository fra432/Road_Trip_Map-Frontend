import LoginRegisterFormStyled from "./LoginRegisterFormStyled";
import { BiUserCircle, BiEdit } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../redux/store/hooks";
import loginThunk from "../../redux/thunks/userThunks";
import { useNavigate } from "react-router-dom";

const LoginRegisterForm = (): JSX.Element => {
  const blankData = {
    email: "",
    username: "",
    password: "",
  };

  const [register, setRegister] = useState<boolean>(false);
  const [formData, setFormData] = useState(blankData);
  const [error, setError] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const sumbitData = (event: React.FormEvent) => {
    event.preventDefault();
    toast.dismiss();
    if (!formData.email.includes("@")) {
      setError("Invalid Email");
      toast.error("Invalid Email");
    } else {
      dispatch(loginThunk(formData));
      setFormData(blankData);
      setError("");
    }
  };

  const switchToRegister = () => {
    setRegister(true);
    setFormData(blankData);
    setError("");
  };

  const switchToLogin = () => {
    setRegister(false);
    setFormData(blankData);
    setError("");
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
        <form onSubmit={sumbitData} className="form">
          <h3 className="form-title">{`${
            register ? "Register" : "Login"
          } Here`}</h3>
          <label className="hidden" htmlFor="email">
            Email
          </label>
          <div
            className={`wrapper ${error === "Invalid Email" ? "error" : ""}`}
          >
            <MdOutlineEmail className="icon" />
            <input
              className={error === "Invalid Email" ? "error" : ""}
              formNoValidate
              autoComplete="off"
              placeholder="Email"
              value={formData.email}
              required
              onChange={changeFormData}
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
                value={formData.username}
                maxLength={15}
                required
                onChange={changeFormData}
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
              value={formData.password}
              minLength={5}
              maxLength={15}
              required
              onChange={changeFormData}
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
