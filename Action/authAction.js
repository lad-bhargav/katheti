import { connectDB } from "@/Utils/mongooseconnect";
import Auth from "@/Schema/authSchema.js";
import { parseJSON } from "@/Utils/parse";

//signup

export const signupAction = async(user) => {
    try{
        await connectDB();
        console.log("connected with DB")
        const userTest = await Auth.create({
      name: "sam",
      email: "sam@example.com",
      password: "123456",
    });
    console.log("user is added")
        //const newUser = await Auth.create(user);
        return {"msg" : "signupDone"}
    }catch(err){
       throw new Error("Internal server error");
    }
}