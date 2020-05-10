import React from 'react';
import Main from './components/Main';
import NewAppt from './components/NewAppt';
import NewPatient from './components/NewPatient';
import NewDoc from './components/NewDoc'


class App extends React.Component {
  state = {
    patients: [],
    doctors: [],
    appointments: []
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault()
    fetch('/patients', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  })
  .then(createdPatient => createdPatient.json())
  .then(jsonedPatient => {
    this.setState({
      patients: [jsonedPatient, ...this.state.patients]
    })
  })
  .catch(error => console.log(error))
 }

 handleDelete = (deletedPatient) => {
  fetch(`http://localhost:3000/patients/${deletedPatient.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((json) => {
      const patients = this.state.patients.filter(
        (patient) => patient.id !== deletedPatient.id
      );
      this.setState({ patients });
    })
    .catch((error) => console.log(error));
};

handleUpdate = (event, formInputs) => {
  event.preventDefault();
  console.log("in it to win it");
  fetch(`http://localhost:3000/patients/${formInputs.id}`, {
    body: JSON.stringify(formInputs),
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((updatedPatient) => {
      this.getPatients();
    })
    .catch((error) => console.log(error));
};

 handleAdd = (event, formInputs) => {
  event.preventDefault()
  fetch('/appointments', {
    body: JSON.stringify(formInputs),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
})
.then(createdAppt => createdAppt.json())
.then(jsonedAppt => {
  this.setState({
    appointments: [jsonedAppt, ...this.state.appointments]
  })
})
.catch(error => console.log(error))
}

handleDelete = (deletedAppt) => {
  fetch(`http://localhost:3000/appointments/${deletedAppt.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((json) => {
      const appointments = this.state.appointments.filter(
        (appointment) => appointment.id !== deletedAppt.id
      );
      this.setState({ appointments });
    })
    .catch((error) => console.log(error));
};

handleUpdate = (event, formInputs) => {
  event.preventDefault();
  console.log("in it to add it");
  fetch(`http://localhost:3000/appointments/${formInputs.id}`, {
    body: JSON.stringify(formInputs),
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((updatedAppt) => {
      this.getAppointments();
    })
    .catch((error) => console.log(error));
};

handleAdd = (event, formInputs) => {
  event.preventDefault()
  fetch('/doctors', {
    body: JSON.stringify(formInputs),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
})
.then(createdDoc => createdDoc.json())
.then(jsonedDoc => {
  this.setState({
    doctors: [jsonedDoc, ...this.state.doctors]
  })
})
.catch(error => console.log(error))
}

handleDelete = (deletedDoc) => {
  fetch(`http://localhost:3000/doctors/${deletedDoc.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((json) => {
      const doctors = this.state.doctors.filter(
        (doctor) => doctor.id !== deletedDoc.id
      );
      this.setState({ doctors });
    })
    .catch((error) => console.log(error));
};

handleUpdate = (event, formInputs) => {
  event.preventDefault();
  console.log("in it to get it");
  fetch(`http://localhost:3000/doctors/${formInputs.id}`, {
    body: JSON.stringify(formInputs),
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((updatedDoc) => {
      this.getDoctors();
    })
    .catch((error) => console.log(error));
};

  componentDidMount() {
    this.getPatients()
    this.getDoctors()
    this.getAppointments()
  }
  getPatients () {
    fetch('/patients')
      .then(response => response.json())
      .then(json => this.setState({patients: json}))
      .catch(error => console.error(error))
  }

  getDoctors () {
    fetch('/doctors')
      .then(response => response.json())
      .then(json => this.setState({doctors: json}))
      .catch(error => console.error(error))
  }

  getAppointments () {
    fetch('/appointments')
      .then(response => response.json())
      .then(json => this.setState({appointments: json}))
      .catch(error => console.error(error))
  }

  render() {
  return (
    <div className="App">
      <div className='container'>
        <Main 
        patients={this.state.patients}
        doctors={this.state.doctors}
        appointments={this.state.appointments}
        />
        <NewPatient handleSubmit={this.handleAdd}/>
        <NewAppt handleSubmit={this.handleAdd}/>
        <NewDoc handleSubmit={this.handleAdd}/>
      </div>
    </div>
  );
}
}
export default App;
