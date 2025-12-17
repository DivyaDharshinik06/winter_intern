const express =require('express');
const mdb = require("mongoose");
const Signup = require("./signup");

const app = express();
const port = 8001;

mdb.connect('mongodb+srv://kdivyadharshini1919_db_user:12345@cluster0.mtzcb6q.mongodb.net/').then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>{
    console.log("MongoDB error",err);
})
app.get('/',(req,res)=>{
    res.send("Server started successfully");
})
app.get('/json',(req, res)=>{
    res.send({
        college:"SECE",
        branch:"CSE",
        year:4
    });
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
app.post("/signup",(req,res)=>
{
    console.log("Destructiong Error:",req.body);
    const {email,username,password}=req.body;
    console.log(email,username,password);
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log("HashedPassword",hashedPassword);
    const newSignup =new Signup({
        email:email,
        username:username,
        password:password
    })
    newSignup.save().then(()=>{
        console.log("Signup successful");
    }).catch((err)=>{
        console.log("Signup error", err);
    })
})
