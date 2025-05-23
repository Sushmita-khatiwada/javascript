import express from"express";
const app=express();
import userRouter from "./routes/user.routes.js";
import { connectDB } from "./config/db.js";
connectDB()
app.use(express.json());
app.use("/users",userRouter);
app.listen(3000,(req,res)=>{
    console.log("app is running on the port 3000");
});


