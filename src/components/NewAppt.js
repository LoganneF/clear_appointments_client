import React from 'react'
import AppointmentForm from './AppointmentForm.js'

function NewAppt(props) {
    return (
      <div className="add-appt">
        <h3>Add an Appointment</h3>
        <AppointmentForm handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default NewAppt