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
