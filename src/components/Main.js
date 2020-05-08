import React from "react";
import Patients from "./Patients.js";
import Doctors from "./Doctors.js";
import Appointments from "./Appointments.js";

function Main(props) {
  console.log(props);
  const { handleUpdate, handleDelete, doctors, patients, appointments } = props;
  return (
    <main>
      <Patients
        patients={patients}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <Doctors
        doctors={doctors}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <Appointments
        doctors={doctors}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default Main;