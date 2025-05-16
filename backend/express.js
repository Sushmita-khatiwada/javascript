import express from "express";
const app=express();
const user =[
    
]
const message={
    "message":"No data found",
};
app.get("/",(req,res)=>{
    if(user.length===0){
        return res.status(404).json(message);  
      }
})
app.get('/',(req,res)=>{
    res.status(201).json(user);

})
app.get('/user',(req,res)=>{
    res.send("user data")
})
app.get('/profile',(req,res)=>{
    res.send("This is profile data")
}) 
app.listen(3000,(req,res)=>{
    console.log("app is running on port 3000")
})