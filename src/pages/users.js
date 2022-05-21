import "../CoreCss/core.css";
import "../CoreCss/core1.css";
import "../CoreCss/core2.css";

import SideBar from "../components/sidebar/sidebar.js";
import NavBar from "../components/navbar/navbar.js";
import UserForm from "../components/Forms/user_form";

function Users() {
  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <SideBar></SideBar>
        <div class="layout-page">
          <NavBar></NavBar>
          <UserForm></UserForm>
        </div>
      </div>
    </div>
  );
}

export default Users;
