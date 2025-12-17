const express = require("express");
const mdb = require("mongoose");
const Signup = require("./models/SignupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors")
const app = express();
const PORT = 8001;

<<<<<<< HEAD
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
=======
app.use(express.json());
app.use(cors())

mdb
  .connect("mongodb+srv://cys:cys@cypersec.h6wsgqg.mongodb.net/seceDec2025")
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("MongoDB Connection Unsuccessful", err));

app.get("/", (req, res) => {
  res.send("Server started successfully");
});

app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newSignup = new Signup({
    email: email,
    username: username,
    password: hashedPassword,
  });
  newSignup.save();
  res.status(200).json({ "message": "Signup Successful", "isSignup": true });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log(existingUser);

    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);

      if (isValidPassword) {
        res.status(200).json({
          message: "Login Successful",
          isLoggedIn: true,
        });
      } else {
        res.status(401).json({
          message: "Incorrect Password",
          isLoggedIn: false,
        });
      }
    } else {
      res.status(404).json({
        message: "User not Found Signup First",
        isLoggedIn: false,
      });
    }
  } catch (error) {
    console.log("Login Error");
    res.status(500).json({
      message: "Login Error",
      isLoggedIn: false,
>>>>>>> ca1f2eb (updating backend)
    });
  }
});

app.get('/getallsignup',async(req,res)=>{
  const signup = Signup.find();
  console.log(signup);
  res.send("Data Fetched")

})
<<<<<<< HEAD
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
=======

app.get("/json", (req, res) => {
  res.json({
    College: "Sece",
    Dept: "CYS",
    StuCount: "64",
  });
});

app.get("/static", (req, res) => {
  res.sendFile(
    "parent\seceBackend2025Dec\index.html"
  );
});

app.listen(PORT, () => {
  console.log(`Server Started Successfully in the port ${PORT}`);
});
>>>>>>> ca1f2eb (updating backend)
