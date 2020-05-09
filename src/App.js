import React from 'react';
import Main from './components/Main'


class App extends React.Component {
  state = {
    patients: [],
    doctors: [],
    appointments: []
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
      </div>
    </div>
  );
}
}
export default App;
