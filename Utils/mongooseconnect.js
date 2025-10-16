import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URL;

if(!MONGO_URI){
    throw new Error("please define MONGO_URI in .env.local");
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn : null,promise : null};
}

export async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

