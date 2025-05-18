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
        return res.status(201).json(user);  
      }
})
app.post('/sum',(req,res)=>{
   const {num,num2}=req.body;
   const sum=num1+num2;
   res.status(201).json({
    "sum":sum
   })

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
//git add .
// git commit -m"dff
//git push origin main
