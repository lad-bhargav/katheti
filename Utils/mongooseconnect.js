import mongoose from "mongoose";


const MONGO_URL = process.env.MONGO_URL;

if(!MONGO_URL){
    console.log("mongo url is missing",process.env.MONGOURL);
    
    throw new Error("please define MONGO_URL in .env");
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn : null,promise : null};
}

export async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGO_URL).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

