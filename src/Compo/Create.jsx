import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Create() {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/user", values)
      .then(() => alert("User added successfully!"))
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={values.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
}

export default Create;
