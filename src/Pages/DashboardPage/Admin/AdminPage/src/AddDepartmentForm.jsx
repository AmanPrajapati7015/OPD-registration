import React, { useState } from "react";
import "./AddDepartmentForm.css"; 

const AddDepartmentForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null; 

  const [formData, setFormData] = useState({
    departmentName: "",
    hodName: "",
    joiningDate: "",
    roomNo: "",
    contact: "",
    email: "",
    address: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose(); 
  };

  return (
    <div className="form-container">
      <h2>Add Department (HOD)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Department Name:
          <input
            type="text"
            name="departmentName"
            value={formData.departmentName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          HOD Name:
          <input
            type="text"
            name="hodName"
            value={formData.hodName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date of Joining:
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Room No.:
          <input
            type="text"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDepartmentForm;
