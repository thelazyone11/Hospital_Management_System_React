import "../CoreCss/core.css";
import "../CoreCss/core1.css";
import "../CoreCss/core2.css";

import SideBar from "../components/sidebar/sidebar.js";
import NavBar from "../components/navbar/navbar.js";
import PatientForm from "../components/Forms/PatientForm";

function PatientDetails() {
  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <SideBar></SideBar>
        <div class="layout-page">
          <NavBar></NavBar>
          <PatientForm />
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
