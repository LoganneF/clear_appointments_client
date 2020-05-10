import React from 'react'
import PatientForm from './PatientForm.js'

function NewPatient(props) {
    return (
      <div className="add-appt">
        <h3>Add a Patient</h3>
        <PatientForm handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default NewPatient