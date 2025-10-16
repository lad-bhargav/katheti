'use client'
import Link from 'next/link'
import React from 'react'
import { Search } from "lucide-react"
import { Button } from './ui/button'
import { Input } from './ui/input'

const NavBar = () => {
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
        <Link href="/signup"><Button variant="secondary">Sign up</Button></Link>
        <Link href="/login"><Button variant="secondary">login</Button></Link>
      </div>
    </div>
  )
}

export default NavBar
