import mongoose from "mongoose";
const AuthSchema = new mongoose.Schema({
    username : {type : String},
    email : {type : String},
    password : {type : String},
    image : {type : String},
    address : {type : String},
});

export default mongoose.models.Auth || mongoose.model("Auth",AuthSchema);