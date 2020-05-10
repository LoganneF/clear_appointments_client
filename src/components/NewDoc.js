import React from 'react'
import DoctorForm from './DoctorForm.js'

function NewDoc(props) {
    return (
      <div className="add-appt">
        <h3>Add a Doctor</h3>
        <DoctorForm handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default NewDoc