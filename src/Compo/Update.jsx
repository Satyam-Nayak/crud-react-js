import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate(); // For navigation after updating
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Fetch existing user details when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:5000/user/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Handle form submission to update user details
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/user/${id}`, values)
      .then(() => {
        alert('User updated successfully!');
        navigate('/'); // Navigate back to the homepage
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
