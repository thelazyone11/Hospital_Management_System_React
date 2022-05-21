import { useParams } from "react-router-dom";

import "../CoreCss/core.css";
import "../CoreCss/core1.css";
import "../CoreCss/core2.css";

import SideBar from "../components/sidebar/sidebar.js";
import NavBar from "../components/navbar/navbar.js";
import AppointmentView from "../components/details_view/appointment_view.js";

const AppointmentViewPage = (props) => {
  let { id } = useParams();

  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <SideBar></SideBar>
        <div class="layout-page">
          <NavBar></NavBar>
          <AppointmentView id={id} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentViewPage;
