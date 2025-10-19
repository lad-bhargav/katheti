import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {type : String},
    price : {type : Number},
    description : {type : String},
    category:{
        type:String,
        enum: [
            "men's clothing",
            "women's clothing",
            "jewelery",
            "electronics",
        ],
    },
    image:{type:String}
});

export default mongoose.models.Product || mongoose.model("Product",productSchema);