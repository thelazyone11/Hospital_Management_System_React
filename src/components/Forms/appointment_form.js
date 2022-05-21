import { useState } from "react";
import React from "react";
import { baseUrlRec } from "../../const/const.js";

import Axios from "axios";

import { useNavigate } from "react-router-dom";

function Appointmentform() {
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentdate, setAppointmentDate] = useState("");
  const [problem, setProblem] = useState("");
  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO

    const json = JSON.stringify({
      patientName: patientId,
      doctorName: doctorId,
      appointmentDate: appointmentdate,
      problem: problem,
    });
    console.log(json);
    Axios.post(`${baseUrlRec}/appointment`, json, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      var obj = JSON.parse(JSON.stringify(response.data));
      console.log(obj.appointmentId);

      nav(`/appointment/${obj.appointmentId}`);
    });
  };

  return (
    <div class="content-wrapper">
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
          <div class="col-xl">
            <div class="card1 mb-4">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h3 class="mb-0">Add Appointment</h3>

                {/* <small class="text-muted float-end">Merged input group</small> */}
              </div>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label
                      class="form-label"
                      for="basic-icon-default-patientid"
                    >
                      Patient Id
                    </label>
                    <div class="input-group input-group-merge">
                      <span
                        id="basic-icon-default-patientid2"
                        class="input-group-text"
                      >
                        <i class="bx bx-user"></i>
                      </span>
                      <input
                        onChange={(e) => setPatientId(e.target.value)}
                        type="text"
                        class="form-control"
                        id="basic-icon-default-patientid"
                        placeholder=""
                        aria-label=""
                        aria-describedby="basic-icon-default-patientid2"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label
                      class="form-label"
                      for="basic-icon-default-doctorname"
                    >
                      Doctor ID
                    </label>
                    <div class="input-group input-group-merge">
                      <span
                        id="basic-icon-default-doctorname2"
                        class="input-group-text"
                      >
                        <i class="bx bx-user"></i>
                      </span>
                      <input
                        onChange={(e) => setDoctorId(e.target.value)}
                        type="text"
                        class="form-control"
                        id="basic-icon-default-doctorname"
                        placeholder=""
                        aria-label="Doe"
                        aria-describedby="basic-icon-default-doctorname2"
                      />
                    </div>
                  </div>

                  {/* <div class="mb-3 row"> */}
                  {/* <label for="html5-date-input" class="col-md-2 col-form-label">Date</label> */}
                  {/* <div class="col-md-10">
                          <input class="form-control" type="date" value="2021-06-18" id="html5-date-input" />
                        </div> */}
                  {/* </div> */}

                  {/* ========================================================= */}

                  <div class="mb-3">
                    <label
                      class="col-md-3 col-form-label"
                      for="html5-date-input"
                    >
                      Appointment Date
                    </label>
                    <div class="input-group input-group-merge">
                      {/* <span class="input-group-text"><i class="bx bx-envelope"></i></span> */}
                      <input
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        class="form-control"
                        type="date"
                        placeholder="2021-06-18"
                        id="html5-date-input"
                      />

                      {/* <span id="basic-icon-default-email2" class="input-group-text">@example.com</span> */}
                    </div>
                    <div class="form-text"></div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-problem">
                      Problem
                    </label>
                    <div class="input-group input-group-merge">
                      <span
                        id="basic-icon-default-problem2"
                        class="input-group-text"
                      >
                        <i class="bx bx-comment"></i>
                      </span>
                      <textarea
                        onChange={(e) => setProblem(e.target.value)}
                        id="basic-icon-default-problem"
                        class="form-control"
                        placeholder="Please Enter Your problem..."
                        aria-label="Please Enter Your problem..."
                        aria-describedby="basic-icon-default-problem2"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    BOOK
                  </button>
                  {/* <div class="col-sm-10" style={{display:"block" ,align:"right"}}> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointmentform;
