import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user-routes.js";
const app = express();
app.use(express.json())
app.use('/api/user', userRoutes)

mongoose.connect('mongodb+srv://admin:mongodb.755@cluster0.ruupawa.mongodb.net/Blog?retryWrites=true&w=majority')
  .then(()=> app.listen(5001))
  .then(()=> {console.log('Connected to database')})
  .catch((err)=>console.log(err))
