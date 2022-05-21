import LoginPage from "./components/login/loginPage";

import React, { useContext, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import PaitientPage from "./pages/paitient";
import PatientDetails from "./pages/patient_details";
import Appointment from "./pages/appointment";
import AppointmentViewPage from "./pages/appointment_view_page";
import Users from "./pages/users";

import ApiService from "./Service/api_service";
import { UserContext } from "./Provider/user_provider";

function App() {
  const token = localStorage.getItem("token");

  const [userData, setUserData] = useContext(UserContext);

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/patient" element={<PaitientPage />}></Route>
        <Route path="/patient/:id" element={<PatientDetails />}></Route>
        <Route path="/user" element={<Users />}></Route>

        <Route path="/appointment" element={<Appointment />}></Route>

        <Route path="/appointment/:id" element={<AppointmentViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
