import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {type : String,required : true},
    price : {type : Number,required:true,min:0},
    description : {type : String,required:true},
    category:{
        type:String,
        required : true,
        enum: [
            "men's clothing",
            "women's clothing",
            "jewelery",
            "electronics",
        ],
    },
    image:{type:String,required : true}
});

export default mongoose.models.Product || mongoose.model("Product",productSchema);