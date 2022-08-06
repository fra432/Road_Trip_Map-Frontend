import HeaderStyled from "./HeaderStyled";
import { ImSwitch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { logoutActionCreator } from "../../redux/features/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    userInfo: { username },
  } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.clear();
    dispatch(logoutActionCreator());
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <HeaderStyled>
      <div className="logo-container">
        <img
          onClick={navigateToHome}
          src="trippy_logo.webp"
          alt="trippy logo"
          className="logo"
        />
      </div>
      <h2 className="username">Welcome {username}</h2>
      <div className="button-logout" onClick={logout}>
        <ImSwitch className="icon" size={30} />
        <span>LOGOUT</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
