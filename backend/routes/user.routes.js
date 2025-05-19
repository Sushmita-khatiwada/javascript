import {Router } from "express";
const router =Router();
import userRouter from "./routes/user.route.js";
app.use(express.json());
app.use("/users",userRouter);
app.listen(3000,(rwq,res)=>{
    console.log("app is running on the port 3000");
});
