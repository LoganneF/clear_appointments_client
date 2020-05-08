import React from "react";
import Form from "./Form.js";

class Appointment extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, appointment) => {
    console.log("update running");
    this.props.handleUpdate(event, appointment);
    this.toggleForm();
  };

  render() {
    const { appointment, handleDelete } = this.props;

    return (
      <>
        {this.state.formVisible ? (
          <Form
            appointment={appointment}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className="appointment">
            <h3>{appointment.patient}</h3>
            <p>{appointment.doctor}</p>
            <small>{appointment.date}</small>
            <small>{appointment.time}</small>
            <button onClick={() => handleDelete(appointment)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
          </div>
        )}
      </>
    );
  }
}

export default Appointment;