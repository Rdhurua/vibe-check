import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const connectDB=async()=>{
     try{
         await mongoose.connect(process.env.MONGO_URI);
         console.log("connected to Database");
     }
     catch(err){
         console.log("internal server at database connection",err);
         process.exit(1);
     }
}
export default connectDB;