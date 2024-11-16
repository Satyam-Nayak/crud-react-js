import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Create(){
    const [values, setValues] =useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        // Post data to an API
        axios.post("http://localhost:5000/user", values)
          .then((response) => {
            alert("User added successfully!");
          })
          .catch((error) => {
            console.error("Error adding user:", error);
          });
      };
    
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
  <div className="mb-2">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      name="name"
      className="form-control"
      placeholder="Enter Name"
      value={values.name}
      onChange={handleChange}
    />
  </div>
  <div className="mb-2">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      name="email"
      className="form-control"
      placeholder="Enter Email"
      value={values.email}
      onChange={handleChange}
    />
  </div>
  <div className="mb-2">
    <label htmlFor="phone">Phone:</label>
    <input
      type="text"
      name="phone"
      className="form-control"
      placeholder="Enter Phone"
      value={values.phone}
      onChange={handleChange}
    />
  </div>
  <button type="submit" className="btn btn-success">
    Submit
  </button>
  <Link to="/" className="btn btn-primary ms-3">
    Back
  </Link>
</form>

            </div>

        </div>
    )
}
export default Create;