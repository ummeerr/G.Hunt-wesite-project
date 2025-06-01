const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




router.get("/", (req, res) => {
    res.send("Auth route working!");
});

//signup 
router.post("/signup", async (req, res) => {
    const { username, email, password} = req.body;

//checking existence
    const userExits = await User.findOne({email});
    if (userExits) { return res.status(400).json({ error: "User already exists"});
}

//hash pascode
const hashedPassword = await bcrypt.hash(password, 10);    

//for new user
const user = new User({username, email, password: hashedPassword,});

try{
    await user.save();
    res.status(201).json({ message: "User created successfully!"});
}
    catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Server error"});
    }

});

//login
router.post("/login", async (req, res) =>{
    const {email, password} = req.body;

//finding user
try{
const user = await User.findOne({ email });
if (!user) {
  return res.status(400).json({ error: "Invalid credentials" });
}

//compare code
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {return res.status(400).json({ error: "Invalid credentials"});
}

//jwt token
const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, { expiresIn: "1d"});
res.json({ message: "Login successful", token});
} catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error"});
}

});


module.exports= router;
