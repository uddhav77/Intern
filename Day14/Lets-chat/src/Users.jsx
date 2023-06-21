import React, { useEffect, useState } from "react";
import useCurrentUser from "./Component/useCurrentUser";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const startTime = Date.now();

        const response = await fetch(
          "https://rest-api-bjno.onrender.com/users",
          {
            method: "GET",
          }
        );
        const value = await response.json();
        const endTime = Date.now();

        console.log(value);
        setData(value);
        setLoading(false);

        const loadingTime = endTime - startTime;
        console.log("Loading Time:", loadingTime);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const { isAuth, id } = useCurrentUser();
  if (!isAuth) {
    return <p 
    style={{fontSize:36,
       textAlign:'center'
    }}
    
    >Login First</p>;
  }

  return (
    <>
      <h1 className="disp">List of all Users</h1>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="table">
          <table border="1">
            <tr>
              <th style={{ color: "black" }}>FirstName</th>
              <th style={{ color: "black" }}>LastName</th>
              <th style={{ color: "black" }}>Email</th>
            </tr>
            {data.map((item) => (
              <tr key={item.id}>
                <td style={{ color: "black" }}>{item.firstName}</td>
                <td style={{ color: "black" }}>{item.lastName}</td>
                <td style={{ color: "black" }}>{item.email}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </>
  );
};

export default Users;
