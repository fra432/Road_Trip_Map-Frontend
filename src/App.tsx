import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import AntiController from "./components/AntiController/AntiController";
import Controller from "./components/Controller/Controller";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfoLocationModal from "./components/InfoLocationModal/InfoLocationModal";
import Loader from "./components/Loader/Loader";
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
  const { loading } = useAppSelector((state) => state.ui);
  const { infoModalOpen } = useAppSelector((state) => state.location);
  const { tripId } = useAppSelector((state) => state.locations);
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
  }, [dispatch, navigate, token, logged, tripId]);

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
          path="/map/:tripId"
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
      {logged && <About />}
      {logged && <Footer />}
      {openLocationForm && <LocationForm />}
      {infoModalOpen && <InfoLocationModal />}
      {openTripForm && <TripForm />}
      {loading && <Loader />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
