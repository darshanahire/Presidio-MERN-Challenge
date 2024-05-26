import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import Https from '../servises/Https';

function Home() {
  const navigate = useNavigate();
  const [user,setUser] = useState();
  useEffect(()=>{
    const rentifyuser = localStorage.getItem("rentifyuser");
    console.log(rentifyuser);
    Https.getUser(rentifyuser).then((res)=>{
      
      setUser(res.data);
    })
    if(rentifyuser === null || rentifyuser === "" || rentifyuser=== undefined){
      navigate("/login")
    }
  },[])
  return (
    <>
    <div className='homePar'>
      <h2>Welcome, {user?.fname} {user?.lname} </h2>
    </div>
    </>
  )
}

export default Home