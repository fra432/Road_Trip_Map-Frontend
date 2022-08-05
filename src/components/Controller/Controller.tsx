import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const Controller = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login_register");
    }
  }, [navigate, token]);

  return children;
};

export default Controller;
