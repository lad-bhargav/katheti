'use client'
import { signupAction } from "@/Action/authAction"
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
import  Link  from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error,setError] = useState("");
  const router = useRouter();

  const onSubmitFcn = async(data) => {
      try{
          await signupAction(data);
          router.replace("/login");
      }catch(err){
        setError(err.message);
      }
  }

  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>create one katheti account to shop well</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmitFcn)}>
            <CardContent className="flex flex-col gap-5">
                <Input placeholder="john" id="username" type="text"  {...register("username", { required: "username is required" })}></Input>
                <Input placeholder="you@example.com" id="email" type="email"  {...register("email", { required: "Email is required" })}></Input>
                <Input placeholder="*****" id="password" type="password"  {...register("password", { required: "password is required" })}></Input>
                <Button variant="primary">sign up</Button>
            </CardContent>
          </form>
        </Card>
    </div>
  )
}

export default SignUp
