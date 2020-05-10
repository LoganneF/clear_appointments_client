import React from "react";
import Input from "./Input.js";

class DoctorForm extends React.Component {
  state = {
    name: "",
    specialty: "",
    insurance: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { name, specialty, insurance } = this.state;
    const doctor = {
      name: name,
      specialty: specialty,
      insurance: insurance
    };

    if (this.props.doctor) doctor.id = this.props.doctor.id;

    this.props.handleSubmit(event, doctor);
  };

  componentDidMount() {
    if (this.props.doctor) {
      const { name, specialty, insurance, id } = this.props.doctor;
      this.setState({
        name: name || "",
        specialty: specialty || "",
        insurance: insurance || "",
        id: id || "",
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"Doctor Name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"specialty"}
          placeholder={"Medical Specialty"}
          type={"text"}
          value={this.state.specialty}
          id={"specialty"}
        />
        <Input
          handleChange={this.handleChange}
          name={"insurance"}
          placeholder={"Accepted Insurance Provider"}
          type={"text"}
          value={this.state.insurance}
          id={"insurance"}
        />
        <input
          type="submit"
          value={this.props.doctor ? "update this doctor" : "add a doctor"}
        />
      </form>
    );
  }
}

export default DoctorForm;
