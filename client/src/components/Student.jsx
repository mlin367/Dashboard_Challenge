import React from 'react';

const Student = props => (
  <li className="student">
    <h2 className="name">Name: {props.student.firstName} {props.student.lastName}</h2>
    <h3 className="attenPer">Absent Percentage: {(100 - props.student.attendancePercentage).toFixed(2)}%</h3>
    <div className="attenPer">Attendance Percentage: {props.student.attendancePercentage}%</div>
    <div className="grade">Grade: {props.student.grade}</div>
    <div className="cohort">Cohort: {props.student.cohort}</div>
    <div className="email">Email: {props.student.email}</div>
    <div className="phone">Home Phone: {props.student.homePhoneNumber}</div>
    <div className="counselor">Guidance Counselor: {props.student.guidanceCounselor}</div>
    <div className="advisor">Advisor: {props.student.advisor}</div>
    <div className="officialClass">Official Class: {props.student.officialClass}</div>
    <div className="status">Status: {props.student.status}</div>
  </li>
);

export default Student;