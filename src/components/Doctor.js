import React from "react";
import DoctorForm from "./DoctorForm.js";

class Doctor extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, doctor) => {
    console.log("update running");
    this.props.handleUpdate(event, doctor);
    this.toggleForm();
  };

  render() {
    const { doctor, handleDelete } = this.props;

    return (
      <>
        {this.state.formVisible ? (
          <Form
            doctor={doctor}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className="doctor">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <small>{doctor.insurance}</small>
    
            <button onClick={() => handleDelete(doctor)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
          </div>
        )}
      </>
    );
  }
}

export default Doctor;