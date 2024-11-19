import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div>
        <Link to="/create">Add +</Link>
      </div>
      <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>
                <Link to={`/read/${d.id}`}>Read</Link> |{" "}
                <Link to={`/update/${d.id}`}>Update</Link> |{" "}
                <button onClick={() => alert(`Delete user ${d.id}`)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
