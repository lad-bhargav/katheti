'use server'
import { connectDB } from "@/Utils/mongooseconnect.js";
import Product from "@/Schema/productSchema.js"
import { parseJSON } from "@/Utils/parse";

export const getAllProductAction = async() => {
    try{
        await connectDB();
        console.log("connected with db");
        const allData = await Product.find({}).lean();
        // const plainProducts = allData.map((p) => ({
        //     ...p,
        //     _id : p._id.toString(),
        // }))
        // console.log(plainProducts.length);
        
        return parseJSON(allData);
    }catch(err){
        throw err;
    }
}