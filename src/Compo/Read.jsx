import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>User details</h1>
        <div className="mb-2">
          <strong>Name:{data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email:{data.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Phone:{data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success ms-2">
          Edit
        </Link>
        <Link to={"/"} className="btn btn-info ms-2">
          Back
        </Link>
      </div>
    </React.Fragment>
  );
}
export default Read;
