import React from "react";
import { Link } from "react-router-dom";
import "../../CoreCss/core.css";
import "../../CoreCss/core1.css";
import "../../CoreCss/core2.css";
function UserForm(props) {
  return (
    <div>
      <div class="row">
        <div class="col-xl">
          <div class="card1 mb-4">
            <center>
              <div className="demo-vertical-spacing-lg">
                <h3 class="mb-0">ADD</h3>

                {/* <small class="text-muted float-end">Merged input group</small> */}
              </div>
            </center>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-username">
                    User Name
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-username2"
                      class="input-group-text"
                    >
                      <i class="bx bx-user"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-icon-default-username"
                      placeholder="John"
                      aria-label="John"
                      aria-describedby="basic-icon-default-username2"
                    />
                  </div>
                </div>

                {/* ========================================================================= */}
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-userrole">
                    User Role
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-userrole2"
                      class="input-group-text"
                    >
                      <i class="bx bx-user"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-icon-default-userrole"
                      placeholder="Receptionist"
                      aria-label="Doe"
                      aria-describedby="basic-icon-default-userrole2"
                    />
                  </div>
                </div>

                {/* =============================================== */}
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-email">
                    Email
                  </label>
                  <div class="input-group input-group-merge">
                    <span class="input-group-text">
                      <i class="bx bx-envelope"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-email"
                      class="form-control"
                      placeholder="john.doe"
                      aria-label="john.doe"
                      aria-describedby="basic-icon-default-email2"
                    />
                    <span
                      id="basic-icon-default-email2"
                      class="input-group-text"
                    >
                      @example.com
                    </span>
                  </div>
                  <div class="form-text">
                    You can use letters, numbers & periods
                  </div>
                </div>
                {/* ========================================================================= */}
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-password">
                    password
                  </label>
                  <div class="input-group input-group-merge">
                    <span class="input-group-text">
                      <i class="bx bx-envelope"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-password"
                      class="form-control"
                      placeholder="password"
                      aria-label="john.doe"
                      aria-describedby="basic-icon-default-password2"
                    />
                  </div>
                </div>

                {/* ================================================================================== */}

                {/* <div class="mb-3 row"> */}
                {/* <label for="html5-date-input" class="col-md-2 col-form-label">Date</label> */}
                {/* <div class="col-md-10">
                          <input class="form-control" type="date" value="2021-06-18" id="html5-date-input" />
                        </div> */}
                {/* </div> */}
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-phone">
                    Mobile No
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-phone2"
                      class="input-group-text"
                    >
                      <i class="bx bx-phone"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-phone"
                      class="form-control phone-mask"
                      placeholder="123 456 7890"
                      aria-label="123 456 7890"
                      aria-describedby="basic-icon-default-phone2"
                    />
                  </div>
                </div>

                {/* ========================================================= */}

                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-address">
                    Address
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-address2"
                      class="input-group-text"
                    >
                      <i class="bx bx-comment"></i>
                    </span>
                    <textarea
                      id="basic-icon-default-address"
                      class="form-control"
                      placeholder="Please Enter Your Address..."
                      aria-label="Please Enter Your Address..."
                      aria-describedby="basic-icon-default-address2"
                    ></textarea>
                  </div>
                </div>
                {/* ===================================================================== */}

                {/* ===================================================================== */}
                <div class="mb-3">
                  <label
                    class="form-label"
                    for="basic-icon-default-qualification"
                  >
                    Qualification
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-qualification2"
                      class="input-group-text"
                    >
                      <i class="bx bx-user"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-icon-default-qualification"
                      placeholder="Qualification"
                      aria-label="Doe"
                      aria-describedby="basic-icon-default-qualification2"
                    />
                  </div>
                </div>
                {/* ==================================================================================== */}
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-department">
                    Department
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-department2"
                      class="input-group-text"
                    >
                      <i class="bx bx-user"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-icon-default-department"
                      placeholder="Department"
                      aria-label="Doe"
                      aria-describedby="basic-icon-default-department2"
                    />
                  </div>
                </div>
                {/* ======================================================================================== */}
                <div class="mb-3">
                  <label
                    class="form-label"
                    for="basic-icon-default-designation"
                  >
                    Designation
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-designation2"
                      class="input-group-text"
                    >
                      <i class="bx bx-user"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-icon-default-designation"
                      placeholder="Designation"
                      aria-label="Doe"
                      aria-describedby="basic-icon-default-designation2"
                    />
                  </div>
                </div>
                {/* ==================================================================================== */}
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-gender">
                    Gender
                  </label>
                  <select id="Select" class="form-select form-select-m">
                    <option>Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="T">Other</option>
                  </select>
                </div>
                {/* ========================================================================================== */}

                {/* ================================================================= */}

                {/* ===================================================================== */}
                <div class="mb-3">
                  <label class="col-md-3 col-form-label" for="html5-date-input">
                    Date Of Birth
                  </label>
                  <div class="input-group input-group-merge">
                    {/* <span class="input-group-text"><i class="bx bx-envelope"></i></span> */}
                    <input
                      class="form-control"
                      type="date"
                      placeholder="2021-06-18"
                      id="html5-date-input"
                    />

                    {/* <span id="basic-icon-default-email2" class="input-group-text">@example.com</span> */}
                  </div>
                  {/* ===================================================================== */}

                  <div class="form-text">
                    You can use letters, numbers & periods
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="basic-icon-default-bloodGroup">
                    Blood Group
                  </label>
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-bloodGroup2"
                      class="input-group-text"
                    >
                      <i class="bx bx-user"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-icon-default-bloodGroup"
                      placeholder="A+..."
                      aria-label="John"
                      aria-describedby="basic-icon-default-bloodGroup2"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Insert A Picture
                  </label>
                  <input class="form-control" type="file" id="formFile" />
                </div>
                {/* ================================================================ */}
                {props.element1 ? (
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                ) : (
                  ""
                )}
                {/* <div class="col-sm-10" style={{display:"block" ,align:"right"}}> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
