import express from "express";
import mongoose from "mongoose";
import blogrouter from "./routes/blog-routes.js";
import userRouter from "./routes/user-routes.js";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/blog', blogrouter)

mongoose.connect('mongodb+srv://admin:mongodb.755@cluster0.ruupawa.mongodb.net/Blog?retryWrites=true&w=majority')
  .then(()=> app.listen(5001))
  .then(()=> {console.log('Connected to database')})
  .catch((err)=>console.log(err))
