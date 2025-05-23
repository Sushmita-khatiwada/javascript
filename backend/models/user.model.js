import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type: String,
    },
       email:{
        type: String,
    },
      password:{
        type:String,
    },
       role:{
        type: String, enum: ["tenant","owner","admin"], default:"tenant"
    },
       emailVerified:{
        type:Boolean,
    },
       status:{
       type: String,
        enum:["active","deactive"],
        default:"active"
    },
})
export const User = mongoose.model("User",userSchema);
