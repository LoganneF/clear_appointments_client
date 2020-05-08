import React from "react";
import Doctor from "./Doctor.js";

function Doctors(props) {
  const { handleUpdate, doctors, handleDelete } = props;
  return (
    <div>
      {doctors.map((doctor) => (
        <Doctor
          key={doctor.id}
          doctor={doctor}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Doctors;