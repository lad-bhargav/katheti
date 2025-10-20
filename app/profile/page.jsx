'use client'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { getUserAction } from '@/Action/authAction'
import { Inbox } from "lucide-react";
import { Edit } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button";

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
    <div className='h-screen max-w-screen flex'>
        <div className="left h-full w-[50%] flex justify-center items-center">
          <Card className="h-full w-full bg-gray-50">
          <CardHeader className="mt-20">
            <CardTitle><div className='relative h-[80px] w-[80px] rounded-full bg-yellow-400'>
              {user.image ? (
                <Image
                  src={user.image}
                  alt="profile picture"
                  className="object-cover rounded-full"
                  fill
                  priority
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex justify-center items-center text-gray-500">
                  No Image
                </div>
              )}
              </div>{user.username}
            </CardTitle>
            <CardDescription>katheti user</CardDescription>
            <CardAction className="hover:underline cursor-pointer font-medium"><Link href="/editprofile" className="flex items-center gap-2"><Edit size={20} />edit profile</Link></CardAction>
            </CardHeader>
            <CardContent>
              <Button className='cursor-pointer'>myCart</Button>
              <Button className='ml-5 bg-red-500 cursor-pointer hover:text-red-500 hover:bg-red-100 hover:border-1 border-red-500'>log-out</Button>
            </CardContent>
            <CardFooter>
            <div>
              <p className="text-2xl font-bold">Your Address</p>
            <p className="text-lg font-medium mt-5">{user.address?user.address:<span>No Address Added Yet</span>}</p>
            </div>
            </CardFooter>
        </Card>
        </div>
        <div className="right min-h-screen overflow-auto w-[50%] flex items-center flex-col justify-center">
          <p className='mt-20 text-2xl font-bold'>Purchase Histrory</p>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox/>
              </EmptyMedia>
            <EmptyTitle>Empty Purchase History</EmptyTitle>
          <EmptyDescription><Link href="/" className="text-md font-semibold hover:underline">Buy products</Link></EmptyDescription>
        </EmptyHeader>
        </Empty>
        </div>
    </div>
  )
}

export default page
