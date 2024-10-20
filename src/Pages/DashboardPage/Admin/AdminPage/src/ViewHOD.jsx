import React from "react";
import "./ViewHOD.css"; 

const ViewHOD = ({ hodData }) => {
  return (
    <div className="hod-table-container">
      <h2>HODs Information</h2>
      <table className="hod-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>HOD Name</th>
            <th>Date of Joining</th>
            <th>Room No.</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Remove HOD</th>
          </tr>
        </thead>
        <tbody>
          {hodData.map((hod, index) => (
            <tr key={index}>
              <td>{hod.department}</td>
              <td>{hod.name}</td>
              <td>{hod.joiningDate}</td>
              <td>{hod.roomNo}</td>
              <td>{hod.contact}</td>
              <td>{hod.email}</td>
              <td>{hod.address}</td>
              <td>{hod.gender}</td>
              <td>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewHOD;
