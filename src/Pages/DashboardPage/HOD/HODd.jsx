import React, { useState } from 'react'
import './hod.css'

const HODd = () => {
  
  const [doctors, setDoctors] = useState([]);

  const [doctorName, setDoctorName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const [isViewingDoctors, setIsViewingDoctors] = useState(false);
  const addDoctor = () => {
    if (doctorName && roomNumber) {

      setDoctors([...doctors, { name: doctorName, room: roomNumber }]);

      setDoctorName("");
      setRoomNumber("");
    } else {
      alert("Please enter both doctor's name and room number.");
    }
  };


  const viewDoctors = () => {
    setIsViewingDoctors(true);
  };


  const addDoctorMode = () => {
    setIsViewingDoctors(false);
  };

  return (
    <>
     <div className="header">
        <h1>HOD Dashboard</h1>
        <ul className="about">
          <li className="about transition">Your Profile</li>
          <li className="about transition">Settings</li>
        </ul>
      </div>
      <div className="hod-dashboard">

        <div className="sidebar">
          <button onClick={addDoctorMode}>Add Doctor</button>
          <button onClick={viewDoctors}>View Doctors</button>
          <button>Update Doctor-room info</button>
          <button>Doctor on leave</button>
          <button id="profile">Profile Detail</button>

        </div>


        {isViewingDoctors ?  (
          <div className="view-doctors">
            <h2>Doctors List</h2>
            {doctors.length > 0 ? (
              <ol className="list ">
                {doctors.map((doctor, index) => (
                  <li key={index} className="link">
                    {doctor.name} - Room: {doctor.room}
                  </li>
                ))}
              </ol>
            ) : (
              <p>No doctors added yet.</p>
            )}
          </div>
        ):(
          <div className="add-doctor-form">
            <h2>Add Doctor</h2>
            <input
              type="text"
              className="input"
              placeholder="Doctor's Name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Room Number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
            <button onClick={addDoctor} className="add">Add Doctor</button>
          </div>
           ) }
      </div>
      <div className="footer">
        <h3>Email id: abchospital@gmail.com</h3>
        <h3>Address : Rohini Sector-4 Near Saint giri school</h3>
      </div>
    </>
  )
}

export default HODd