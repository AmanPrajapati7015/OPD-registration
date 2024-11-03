import React, { useState, useEffect} from 'react'
import doctorsdata from "./data.json";
import axios from 'axios'
import "./hod.css"

const HODd = () => {
   
  const [doctors, setDoctors] = useState([]);
  

  const [doctorName, setDoctorName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [available, setavailable] = useState("")
  const [special, setspecial] = useState("")
  const [isViewingDoctors, setIsViewingDoctors] = useState(false);
  const [profile, setprofile] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null);




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
         
         setprofile(true);
  }


  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/doctor/doctor-data');
        setDoctors(response.data)
       
      }
      catch (error) {
        console.error("Error fetching users : ", error)
      }
    }
    fetchUsers();
    console.log(doctors)

  }, [isViewingDoctors])




 const handleSubmit = async (e) => {
    e.preventDefault();

    if (doctorName && roomNumber && available && special) {
      const newDoctor = { name: doctorName, roomNumber:roomNumber, available : available, speciality: special };


      try {
        const response = await axios.post("http://localhost:3000/doctor/form-data", newDoctor);
        console.log(response.data.message); // Success message from backend
        alert("Doctor added successfully!");
        setDoctorName("");
        setRoomNumber("");
        setavailable("");
        setspecial("");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      }
    } else {
      alert("Please fill in all the details.");
    }
  };


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
              <p>Name: {selectedDoctor.name}</p>
              <p>Room: {selectedDoctor.roomNumber}</p>
              <p>Available: {selectedDoctor.available}</p>
              <p>Speciality: {selectedDoctor.speciality}</p>
              <p>Experience: {selectedDoctor.experience}</p>
              <p>Contact: {selectedDoctor.contact}</p>

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
              {doctors.map((doc,i)=>(
                <li key={i} className='doc'>
               <button className='doc-list' onClick={()=>doctor_profile(doc)} >
                <p> Name :  {doc.name} </p>
                <p>Speciality: {doc.speciality}</p>
                <p>Room Number : {doc.roomNumber}</p>
                <p>Available : {doc.available}</p>
                </button> </li>
              ))
                   
              }
             </ol>
          
          </div>
        ):(
          <div className="add-doctor-form">
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Doctor's Name"
              name='name'
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Room Number"
              name='roomNumber'
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
            <input type="text"
            className='input'
            placeholder='Availablity' 
            name='available'
            value={available}
             onChange={(e)=>setavailable(e.target.value)}
            />
            <input type="text"
            className='input'
             placeholder='speciality'
             name='speciality'
             value={special}
             onChange={(e)=>setspecial(e.target.value)}
            />
            <button  className="add">Add Doctor</button>
            </form>
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