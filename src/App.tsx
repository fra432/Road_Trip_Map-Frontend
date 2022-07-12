import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login_register" />} />
        <Route path="/login_register" element={<LoginRegisterPage />} />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
