import React from "react";
import Input from "./Input.js";

class PatientForm extends React.Component {
  state = {
    name: "",
    dob: "",
    insurance: "",
    allergies: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { name, dob, insurance, allergies } = this.state;
    const patient = {
      name: name,
      dob: dob,
      insurance: insurance,
      allergies: allergies,
    };

    if (this.props.patient) patient.id = this.props.patient.id;

    this.props.handleSubmit(event, patient);
  };

  componentDidMount() {
    if (this.props.patient) {
      const { name, dob, insurance, allergies, id } = this.props.patient;
      this.setState({
        name: name || "",
        dob: dob || "",
        insurance: insurance || "",
        allergies: allergies || "",
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
          placeholder={"Patient Name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"dob"}
          placeholder={"Patient Date of Birth"}
          type={"text"}
          value={this.state.dob}
          id={"dob"}
        />
        <Input
          handleChange={this.handleChange}
          name={"insurance"}
          placeholder={"Patient Insurance Provider"}
          type={"text"}
          value={this.state.insurance}
          id={"insurance"}
        />
        <Input
          handleChange={this.handleChange}
          name={"allergies"}
          placeholder={"Known Patient Allergies"}
          type={"text"}
          value={this.state.allergies}
          id={"allergies"}
        />
        <input
          type="submit"
          value={this.props.patient ? "update this patient" : "add a patient"}
        />
      </form>
    );
  }
}

export default PatientForm;
