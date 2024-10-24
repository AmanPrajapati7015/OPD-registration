import React, { useState } from 'react'
import doctorsdata from "./data.json";
const HODd = () => {
   
  const [doctors, setDoctors] = useState([]);

  const [doctorName, setDoctorName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [available, setavailable] = useState("")
  const [isViewingDoctors, setIsViewingDoctors] = useState(false);
  const [profile, setprofile] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null);


  const addDoctor = () => {
    if (doctorName && roomNumber && available) {

      setDoctors([...doctors, { name: doctorName, room: roomNumber , Available :available }]);

      setDoctorName("");
      setRoomNumber("");
      setavailable("");
    } else {
      alert("Please enter both doctor's name and room number.");
    }
  };


  const viewDoctors = () => {
    setIsViewingDoctors(true);
    setprofile(false);
  };


  const addDoctorMode = () => {
    setIsViewingDoctors(false);
    setprofile(false);
  };
  const updateDoctorInfo = () => {
    alert("Update Doctor-room info functionality coming soon!");
  };
  
  const doctorOnLeave = () => {
    alert("Doctor on leave functionality coming soon!");
  };

  const doctor_profile=(doc)=>{
         setSelectedDoctor(doc)
         console.log(selectedDoctor)
         setprofile(true);
  }



  return (
    <>
    {/* // here i created header of page  */}
     <div className="header">
        <h1>HOD Dashboard</h1>
        <ul className="about">
          <li className="about transition">Your Profile</li>
          <li className="about transition">Settings</li>
        </ul>
      </div>

      {/* // here i created a container called hod-dasboard */}

      <div className="hod-dashboard">

        <div className="sidebar">
          <button onClick={addDoctorMode} className='button'>Add Doctor</button>
          <button onClick={viewDoctors} className='button'>View Doctors</button>
          <button className='button' onClick={updateDoctorInfo}>Update Doctor-room info</button>
          <button className='button' onClick={doctorOnLeave}>Doctor on leave</button>
          <button id="profile" className='button'>
           {
            profile ? (
              <div>
              <h3>Doctor Profile</h3>
              <p>Name: {selectedDoctor?.name}</p>
              <p>Room: {selectedDoctor?.room}</p>
              <p>Speciality: {selectedDoctor?.speciality}</p>
              <p>Experience: {selectedDoctor?.experience}</p>
              <p>Available: {selectedDoctor?.available}</p>
            </div>
          ) : (
            <p>Profile</p>
          )}
          </button>

        </div>

      {/* This window is for view doctors when user clicks on use */}
        {isViewingDoctors ?  (
          <div className="view-doctors">
            <h2>Doctors List</h2>
             <ol >
              {doctorsdata.map((doc,i)=>(
                <li key={i} className='doc'>
               <button className='doc-list' onClick={()=>doctor_profile(doc)} >
              
                <p> Name :  {doc.name} </p>
                <p>Speciality: {doc.speciality}</p>
                <p>Experience :{doc.experience}</p>
                <p>Available : {doc.available}</p>
                </button> </li>
              ))
                   
              }
             </ol>
            <ol className="list " start={4}>
              
                {doctors.map((doctor, index) => (
                  <li key={index} className="doc" >
                    <button className='doc-list' onClick={()=>doctor_profile(doc)}>
                    <p>{doctor.name} - Room: {doctor.room} </p>
                    <p>Availabilty : {doctor.Available}</p>
                    </button>
                  </li>
                ))}
              </ol>
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
            <input type="text"
            className='input'
            placeholder='Availablity' 
             onChange={(e)=>setavailable(e.target.value)}
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