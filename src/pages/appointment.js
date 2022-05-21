import React from "react";

import "../CoreCss/core.css";
import "../CoreCss/core1.css";
import "../CoreCss/core2.css";
import SideBar from "../components/sidebar/sidebar.js";

import NavBar from "../components/navbar/navbar.js";

import Appointmentform from "../components/Forms/appointment_form";

function Appointment() {
  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <SideBar></SideBar>
        <div class="layout-page">
          <NavBar></NavBar>
          <Appointmentform></Appointmentform>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
