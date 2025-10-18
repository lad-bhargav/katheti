'use client'
import { loginAction } from "@/Action/authAction"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import  Link  from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error,setError] = useState("");
  const router = useRouter();

  const onSubmitFcn = async(data) => {
      try{
          await loginAction(data);
          localStorage.setItem("email",data.email);
          router.replace("/");
      }catch(err){
        setError(err.message);
      }
  }

  return (
    <div className="flex justify-center items-center fixed w-full min-h-screen bg-gray-100">
      <div className="left h-screen relative w-[50%] overflow-hidden">
                <Image
                  src="/sideimg.png" // <-- your image name here (in /public)
                  alt="Signup illustration"
                  fill  // makes it cover the whole div
                  className="object-cover"
                  priority
              />
        </div>
        <div className="right h-full w-[50%] flex justify-center items-center">
          <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>login in to katheti account to shop well</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmitFcn)}>
            <CardContent className="flex flex-col gap-5">
                <Input placeholder="you@example.com" id="email" type="email"  {...register("email", { required: "Email is required" })}></Input>
                <Input placeholder="*****" id="password" type="password"  {...register("password", { required: "password is required" })}></Input>
                <Button variant="secondary" className="bg-blue-900 mt-5 text-white hover:bg-blue-950">login</Button>
            </CardContent>
            <CardFooter className="text-center mt-9 ml-20">
              <p>doesn't have an account? <Link href="/signup" className="text-blue-700 hover:underline">sign up</Link></p>
            </CardFooter>
          </form>
        </Card>
        </div>
    </div>
  )
}

export default Login
