import { connectDB } from "@/Utils/mongooseconnect";
import Product from "@/Schema/productSchema.js"
import { parseJSON } from "@/Utils/parse";

export const productAdd = async(data) => {
    try{
        await connectDB();
        console.log("connected with DB")
        const newProduct = await Product.create(data);
        return {"msg" : "added"}
    }catch(err){
       throw new Error("Internal server error");
    }
}