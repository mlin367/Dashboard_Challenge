import React from 'react';
import Student from './Student';
import * as data from '../../../studentData/students.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threshold: '0',
      data: []
    };
  }

  componentDidMount() {
    data.default.sort((a, b) => b.attendancePercentage - a.attendancePercentage);
    this.setState({
      data: data.default
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Attendance Checker</h1>
        <input onChange={(e) => this.setState({ threshold: e.target.value })} type="number" step="0.01" min="0.00" max="40.00" value={this.state.threshold} />
        <input className="slider" onChange={(e) => this.setState({ threshold: e.target.value })} type="range" min="0.00" max="40.00" value={this.state.threshold} step="0.01"  />
        <h3>{this.state.threshold}</h3>
        {this.state.data.map((student, i) => {
          if (Number((100 - student.attendancePercentage).toFixed(2)) >= this.state.threshold) {
            return <Student student={student} key={i} />
          }
        })}
      </div>
    );
  }
}

export default App;