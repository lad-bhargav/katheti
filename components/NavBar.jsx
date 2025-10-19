'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Search } from "lucide-react"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { getUserAction } from '@/Action/authAction'

const NavBar = () => {
  const [isLogin,setIsLogin] = useState(false);
  const [username,setUsername] = useState("");
  useEffect(()=>{
      const email = localStorage.getItem("email");
      if(email)setIsLogin(true);
  },[]);

  const getUser = async() => {
    const id = localStorage.getItem("userId");
    const user = await getUserAction(id);
    setUsername(user.username);
  }

  useEffect(()=>{
     getUser();
  });

  
  return (
    <div className='flex h-14 gap-15 w-full bg-[#3C467B] p-1'>
      {/* logo */}
      <div className='h-full w-[20%] flex justify-start pl-2 items-center'>
            <Link href="/"><p className='font-bold cursor-pointer text-2xl text-white'>katheti</p></Link>
        </div>
        <div className="relative flex items-center w-[40%]">
        {/* Search */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search products here..."
          className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:border-white"
        />
      </div>
      {/* login signup */}
      <div className='gap-8 h-full w-[40%] flex justify-end pr-3 items-center'>
        {isLogin?<p className='text-transparent text-2xl font-semibold cursor-pointer bg-clip-text bg-gradient-to-l from-blue-700 to-pink-600'>{username}</p>:<><Link href="/signup"><Button variant="secondary">Sign up</Button></Link>
        <Link href="/login"><Button variant="secondary">login</Button></Link></>}
      </div>
    </div>
  )
}

export default NavBar
