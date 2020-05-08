import React from "react";
import Form from "./Form.js";

class Patient extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, patient) => {
    console.log("update running");
    this.props.handleUpdate(event, patient);
    this.toggleForm();
  };

  render() {
    const { patient, handleDelete } = this.props;

    return (
      <>
        {this.state.formVisible ? (
          <Form
            patient={patient}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className="patient">
            <h3>{patient.name}</h3>
            <p>{patient.dob}</p>
            <small>{patient.insurance}</small>
            <small>{patient.allergies}</small>
            <button onClick={() => handleDelete(patient)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
          </div>
        )}
      </>
    );
  }
}

export default Patient;