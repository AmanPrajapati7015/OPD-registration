
import React, { useState } from "react";
import ViewHOD from "./ViewHOD"; 
import AddDepartmentForm from "./AddDepartmentForm"; 
import "./AdminPage.css";
import Manoj from "../../../assets/manojkumar.jpg"; 

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const hodData = [
    {
      department: "Cardiology",
      name: "Dr. Abhishek",
      joiningDate: "2020-05-10",
      roomNo: "101",
      contact: "9876543210",
      email: "Abhii@gmail.com",
      address: "DTU, Delhi",
      gender: "Male",
      remove: "false",
    },
    {
      department: "Neurology",
      name: "Dr. Aman Prajapati",
      joiningDate: "2022-09-15",
      roomNo: "202",
      contact: "9876543211",
      email: "Amen@gamil.com",
      address: "DTU, Delhi",
      gender: "Male",
    },
    {
      department: "Orthopedics",
      name: "Dr. Anshika Girdhar",
      joiningDate: "2021-02-22",
      roomNo: "303",
      contact: "9876543212",
      email: "Anshika@gmail.com",
      address: "DTU, Delhi",
      gender: "Female",
    },
    {
      department: "ENT",
      name: "Dr. Ankit Singh",
      joiningDate: "2021-05-12",
      roomNo: "404",
      contact: "9876543213",
      email: "Ankit@gmail.com",
      address: "DTU, Delhi",
      gender: "Male",
    },
  ];

  const handleOpenAddForm = () => setActiveComponent("addForm");
  const handleViewHOD = () => setActiveComponent("viewHOD");

  return (
    <div className="admin-container">
      <div className="sidebar">
        <button onClick={handleOpenAddForm}>Add Department (HOD)</button>
        <button onClick={handleViewHOD}>View HOD</button>
        <div className="about-admin">
          <img src={Manoj} alt="Doctor-Image" />
          <h1>Dr. Manoj Sethi</h1>
          <h3>Administrator</h3>
          <p>Admin of DTU hospital. Has done his PhD in CSE from Harvard in 1996 and performed multiple operations on machines and some operations on humans too. Admin from 2018-present. Never gives marks to student so better prepare yourself.</p>
        </div>
      </div>

      <div className="main-content">
      {activeComponent === "addForm" && (
          <AddDepartmentForm isVisible={true} onClose={() => setActiveComponent(null)} />
        )}
        {activeComponent === "viewHOD" && <ViewHOD hodData={hodData} />}
      </div>
    </div>
  );
};

export default AdminPage;
