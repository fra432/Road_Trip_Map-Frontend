import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LocationForm from "./components/LocationForm/LocationForm";
import HomePage from "./pages/HomePage/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import { loginActionCreator } from "./redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { DecodeToken } from "./types/types";

function App() {
  const dispatch = useAppDispatch();
  const { openLocationForm } = useAppSelector((state) => state.newLocation);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token as string) {
      const { username, id }: DecodeToken = jwtDecode(token as string);
      const userInfo = {
        username,
        id,
      };
      dispatch(loginActionCreator(userInfo));
    }
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login_register" />} />
        <Route path="/login_register" element={<LoginRegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      {openLocationForm && <LocationForm />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
