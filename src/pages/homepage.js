import { Navigate } from "react-router-dom";
import SideBar from "../components/sidebar/sidebar.js";
import NavBar from "../components/navbar/navbar.js";
import Dashboard from "../components/dashboard/dashboard";

import "../CoreCss/core.css";
import "../CoreCss/core1.css";
import "../CoreCss/core2.css";

function HomePage() {
  const token = localStorage.getItem("token");
  console.log(token);
  // const nav = useNavigate();

  if (token == null) {
    return <Navigate to="/login" />;
  }

  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <SideBar></SideBar>
        <div class="layout-page">
          <NavBar></NavBar>
          <Dashboard></Dashboard>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
