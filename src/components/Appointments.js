import React from "react";
import Appointment from "./Appointment.js";

function Appointments(props) {
  const { handleUpdate, appointments, handleDelete } = props;
  return (
    <div>
      {appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Appointments;