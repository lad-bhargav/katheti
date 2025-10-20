'use server'
import { connectDB } from "@/Utils/mongooseconnect";
import Auth from "@/Schema/authSchema.js";
import { parseJSON } from "@/Utils/parse";

//signup

export const signupAction = async(user) => {
    try{
        await connectDB();
        console.log("connected with DB")
        const newUser = await Auth.create(user);
        return {"msg" : "signupDone"}
    }catch(err){
       throw new Error("Internal server error");
    }
}

export const loginAction = async(user) => {
    try{
        await connectDB();
        const checkUser = await Auth.findOne({"email" : user.email});
        if(!checkUser)throw new Error("signup first");
        else if(user.password != checkUser.password) throw new Error("invalid password");
        return parseJSON(checkUser);
    }catch(err){
        throw new Error("Internal server error");
    }
}

export const getUserAction = async(id) => {
    try{
        await connectDB();
        const user = await Auth.findById(id);
        if(!user)throw new Error("id does not exist in DB");
        return parseJSON(user);
    }catch(err){
        throw new Error("internal server error");
    }
}

export const editProfileAction = async(id,newData) => {
    try{
        await connectDB();
        const edituser = await Auth.findByIdAndUpdate(id,newData,{ new: true });
        console.log(parseJSON(edituser));
        
    }catch(err){
        throw new Error("internal server error");
    }
}