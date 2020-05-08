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
  }
  getPatients () {
    fetch('http://localhost:3000/patients')
      .then(response => response.json())
      .then(json => console.log(json))
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
