import React, { useEffect, useState } from 'react';
import useCurrentUser from './Component/useCurrentUser';

const Profile = () => {
  const [data, setData] = useState({ firstName: '', lastName: '' });
  const {id} = useCurrentUser();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://rest-api-bjno.onrender.com/id/${id}`,
          {
            method: 'GET',
          }
        );
        const value = await response.json();
        setData(value);
      } catch (err) {
        console.log('Error', err);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1 style={{
        color:'black',
        display:'flex',
        justifyContent:'center'
      }}
      >Welcome to your Profile</h1>

      <p style={{
        color:'white',
        display:'flex',
        justifyContent:'center',
        fontSize: 24,
        
      }}
      >First Name: {data.firstName}</p>

      <p style={{
        color:'white',
        display:'flex',
        justifyContent:'center',
        fontSize: 24,
      }} 
      >Last Name: {data.lastName}</p>

    </div>
  );
};

export default Profile;
