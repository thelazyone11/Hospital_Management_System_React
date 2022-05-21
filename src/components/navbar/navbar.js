import "../../CoreCss/core.css";
import "../../CoreCss/core1.css";
import "../../CoreCss/core2.css";
import { useState, useContext, useEffect } from "react";

import ApiService from "../../Service/api_service";

import { UserContext } from "../../Provider/user_provider";

function NavBar() {
  const [userData, setUserData] = useContext(UserContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token != null) {
      ApiService.fetchUserData().then((response) => {
        var obj = JSON.parse(JSON.stringify(response.data));
        // console.log(obj);
        setUserData(obj);
      });
    }
  });

  return (
    <nav
      class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i class="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div
        class="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <div class="navbar-nav align-items-center">
          <div class="nav-item d-flex align-items-center">
            <i class="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              class="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>

        <ul class="navbar-nav flex-row align-items-center ms-auto">
          <li class="nav-item lh-1 me-3">{userData.username}</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
