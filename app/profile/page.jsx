'use client'
import { getUserAction } from '@/Action/authAction'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [user,setUser] = useState({});
    const getProfile = async() => {
        const id = localStorage.getItem("userId");
        const userDetails = await getUserAction(id);
        setUser(userDetails);
        console.log(userDetails);
    }

    useEffect(()=>{
        getProfile();
    },[]);

  return (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default page
