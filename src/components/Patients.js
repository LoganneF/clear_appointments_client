import React from "react";
import Patient from "./Patient.js";

function Patients(props) {
  const { handleUpdate, patients, handleDelete } = props;
  return (
    <div>
      {patients.map((patient) => (
        <Patient
          key={patient.id}
          patient={patient}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Patients;