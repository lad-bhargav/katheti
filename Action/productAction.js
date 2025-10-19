'use server'
import { connectDB } from "@/Utils/mongooseconnect.js";
import Product from "@/Schema/productSchema.js"
import { parseJSON } from "@/Utils/parse";

export const productAdd = async(data) => {
    try{
        await connectDB();
        console.log("connected with DB");
        await Product.deleteMany();
        console.log("Old data deleted");
        const newProduct = await Product.insertMany(data);
        console.log("all data inserted");
        return {"msg" : "added"}
    }catch(err){
       throw new Error("Internal server error");
    }
}