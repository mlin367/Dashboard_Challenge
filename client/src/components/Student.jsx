import React from 'react';

const Student = props => (
  <div className="student">
    <div className="name">Name: {props.firstName} {props.lastName}</div>
    <h3 className="attenPer">Attendance Percentage: {props.attendancePercentage}%</h3>
    <div className="grade">Grade: {props.grade}</div>
    <div className="cohort">Cohort: {props.cohort}</div>
    <div className="email">Email: {props.email}</div>
    <div className="phone">Home Phone: {props.homePhoneNumber}</div>
    <div className="counselor">Guidance Counselor: {props.guidanceCounselor}</div>
    <div className="advisor">Advisor: {props.advisor}</div>
    <div className="officialClass">Official Class: {props.officialClass}</div>
    <div className="status">Status: {props.status}</div>
  </div>
);

export default Student;