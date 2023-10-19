import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://dummyjson.com/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((Data) => {
        console.log(Data);
        setData(Data.users);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Profile picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>
                    <img
                      src={val.image}
                      alt="Profile"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.gender}</td>
                  <td>{val.email}</td>
                  <td>{val.username}</td>
                  <td>{val.domain}</td>
                  <td>{val.ip}</td>
                  <td>{val.university}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
