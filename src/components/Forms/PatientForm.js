import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../CoreCss/core.css";
import "../../CoreCss/core1.css";
import "../../CoreCss/core2.css";
// import Appointment from './Appointment';

function PatientForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //
  };

  return (
    <div class="row">
      <div class="col-xl">
        <div class="card1 mb-4">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h3 class="mb-0">Add Patient</h3>

            {/* <small class="text-muted float-end">Merged input group</small> */}
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label" for="basic-icon-default-firstname">
                  First Name
                </label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-default-firstname2"
                    class="input-group-text"
                  >
                    <i class="bx bx-user"></i>
                  </span>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    class="form-control"
                    id="basic-icon-default-firstname"
                    placeholder="John"
                    aria-label="John"
                    aria-describedby="basic-icon-default-firstname2"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="basic-icon-default-lastname">
                  Last Name
                </label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-default-lastname2"
                    class="input-group-text"
                  >
                    <i class="bx bx-user"></i>
                  </span>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    class="form-control"
                    id="basic-icon-default-lastname"
                    placeholder="Doe"
                    aria-label="Doe"
                    aria-describedby="basic-icon-default-lastname2"
                  />
                </div>
              </div>

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
                  <span id="basic-icon-default-phone2" class="input-group-text">
                    <i class="bx bx-phone"></i>
                  </span>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    id="basic-icon-default-phone"
                    class="form-control phone-mask"
                    placeholder="123 456 7890"
                    aria-label="123 456 7890"
                    aria-describedby="basic-icon-default-phone2"
                  />
                </div>
              </div>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="basic-icon-default-email"
                    class="form-control"
                    placeholder="john.doe"
                    aria-label="john.doe"
                    aria-describedby="basic-icon-default-email2"
                  />
                  <span id="basic-icon-default-email2" class="input-group-text">
                    @example.com
                  </span>
                </div>
                <div class="form-text">
                  You can use letters, numbers & periods
                </div>
              </div>
              {/* ========================================================= */}

              <div class="mb-3">
                <label class="col-md-3 col-form-label" for="html5-date-input">
                  Date Of Birth
                </label>
                <div class="input-group input-group-merge">
                  {/* <span class="input-group-text"><i class="bx bx-envelope"></i></span> */}
                  <input
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    class="form-control"
                    type="date"
                    placeholder="2021-06-18"
                    id="html5-date-input"
                  />

                  {/* <span id="basic-icon-default-email2" class="input-group-text">@example.com</span> */}
                </div>
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
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    class="form-control"
                    id="basic-icon-default-bloodGroup"
                    placeholder="A+"
                    aria-label="John"
                    aria-describedby="basic-icon-default-bloodGroup2"
                  />
                </div>
              </div>

              {/* ================================================================= */}

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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    class="form-control"
                    placeholder="Please Enter Your Address..."
                    aria-label="Please Enter Your Address..."
                    aria-describedby="basic-icon-default-address2"
                  ></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Send
              </button>
              {/* <div class="col-sm-10" style={{display:"block" ,align:"right"}}> */}
              <Link to="/add_patient/add_appointment">
                {" "}
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ float: "right" }}
                >
                  Book Appointment
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientForm;
