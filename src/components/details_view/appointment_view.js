import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrlRec } from "../../const/const.js";

function AppointmentView(props) {
  let id = props.id;
  const [apId, setApId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentdate, setAppointmentDate] = useState("");
  const [problem, setProblem] = useState("");
  const [apStatus, setApStatus] = useState();

  useEffect(() => {
    axios.get(`${baseUrlRec}/appointment/${id}`).then((response) => {
      console.log(response.data);
      var obj = JSON.parse(JSON.stringify(response.data));
      setApId(obj.appointmentId);
      setPatientId(obj.patientName);
      setDoctorId(obj.doctorName);
      setAppointmentDate(obj.appointmentDate);
      setProblem(obj.problem);
      setApStatus(obj.serialNumber);
    });
  }, []);

  return <div></div>;
}

export default AppointmentView;
