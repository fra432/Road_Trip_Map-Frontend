import HeaderStyled from "./HeaderStyled";
import { ImSwitch } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <HeaderStyled>
      <img
        onClick={navigateToHome}
        src="trippy_logo.webp"
        alt="trippy logo"
        className="logo"
      />
      <div className="button-logout" onClick={logout}>
        <ImSwitch className="icon" size={35} />
        <span>LOGOUT</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
