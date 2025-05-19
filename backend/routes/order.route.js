import {Router} from "express";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
const_filename=
fileURLToPath(import.meta.url);
console.log(__filename);
const_dirname=
path.dirname(__dirname);
const dataPath=
path.join(__dirname,"data","user.json");
console.log(dataPath);
const router=Route();
router.route("/").get(req,res);
{
    const data=
    fs.readFileSync(dataPath,"utf-8");
    console.log(data);
    res.json(JSON.parse(data));
}
router.route("/:id").get((req,res)=>
{
    const{id}=req.params;
    const data=
    fs.readFileSync(dataPath,"utf-8");
    const parseData=
    JSON.parse(data);
    const actualData=
    parseData[id];
    res.json(actualData);
});
router.route("/").post(req,res);
{
    const{name,email,password}
    =req.body;
    if(!email||!name||!password){
        res.status(400).json({"message":"All files are required"})
    }
    console.log(name,email,password);
    fs.writeFileSync(dataPath,JSON.stringfy(req.body))
    res.status(201).json({"message":"User successfully registered"})

};
export default router;
