import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import quizRoute from "./routes/quizRoute.js"
import responseRoute from './routes/responseRoute.js'
import connectDB from './db/db.js';
import { seedDB } from './utils/seed.js';

const app=express();

app.use(express.json());
app.use(cors({
     origin:process.env.FRONTEND_URL,
     credentials:true,
}));

app.use('/api',quizRoute);
app.use('/api',responseRoute);


app.get("/",(req,res)=>{
     res.send("hello this is backend area");
});

app.listen(8000,async(req,res)=>{
    await connectDB();
    await seedDB();
    console.log("listening to ",8000);
})