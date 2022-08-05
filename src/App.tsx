import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AntiController from "./components/AntiController/AntiController";
import Controller from "./components/Controller/Controller";
import Header from "./components/Header/Header";
import InfoLocationModal from "./components/InfoLocationModal/InfoLocationModal";
import LocationForm from "./components/LocationForm/LocationForm";
import TripForm from "./components/TripForm/TripForm";
import HomePage from "./pages/HomePage/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import MapPage from "./pages/MapPage/MapPage";
import TripsListPage from "./pages/TripsListPage/TripsListPage";
import { loginActionCreator } from "./redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { DecodeToken } from "./types/types";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { openLocationForm } = useAppSelector((state) => state.newLocation);
  const { openTripForm } = useAppSelector((state) => state.userTrips);
  const { logged } = useAppSelector((state) => state.user);
  const { infoModalOpen } = useAppSelector((state) => state.location);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token as string) {
      const { username, id }: DecodeToken = jwtDecode(token as string);
      const userInfo = {
        username,
        id,
      };
      dispatch(loginActionCreator(userInfo));
      /* navigate("/home"); */
    }
  }, [dispatch, navigate, token, logged]);

  return (
    <>
      {logged && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login_register" />} />
        <Route
          path="/login_register"
          element={
            <AntiController>
              <LoginRegisterPage />
            </AntiController>
          }
        />
        <Route
          path="/home"
          element={
            <Controller>
              <HomePage />
            </Controller>
          }
        />
        <Route
          path="/map"
          element={
            <Controller>
              <MapPage />
            </Controller>
          }
        />
        <Route
          path="/my_trips"
          element={
            <Controller>
              <TripsListPage />
            </Controller>
          }
        />
      </Routes>
      {openLocationForm && <LocationForm />}
      {infoModalOpen && <InfoLocationModal />}
      {openTripForm && <TripForm />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
