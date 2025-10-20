'use client'
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
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { editProfileAction, getUserAction } from '@/Action/authAction'

const page = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      useEffect(()=>{
        getOldData();
      },[]);

    const [oldData,setOldData] = useState(null);

    const onSubmitFcn = async(newData) => {
        console.log(newData);
        const id = localStorage.getItem("userId");
        await editProfileAction(id,newData);
        router.replace('/profile');
    }

    const getOldData = async() => {
        const id = localStorage.getItem("userId");
        const old = await getUserAction(id);
        setOldData(old);

        reset({
          username: old?.username || "",
          password: old?.password || "",
          address: old?.address || "",
          image: old?.image || ""
        });
    }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>edit profile</CardTitle>
            <CardDescription>katheti user profile</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmitFcn)}>
            <CardContent className="flex flex-col gap-5">
                <Input placeholder="username" id="username" type="text"  {...register("username", { required: "username" })}></Input>
                <Input placeholder="*****" id="password" type="password"  {...register("password", { required: "password is required" })}></Input>
                <Input placeholder="address" id="address" type="text"  {...register("address", { required: "address" })}></Input>
                <Input placeholder="image" id="image" type="text"  {...register("image", { required: "image" })}></Input>
                <Button variant="secondary" className="bg-blue-900 mt-5 text-white hover:bg-blue-950">edit</Button>
            </CardContent>
          </form>
        </Card>
    </div>
  )
}

export default page
