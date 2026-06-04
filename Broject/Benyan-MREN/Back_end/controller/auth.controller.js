const {userRegister ,userLogin}=require("./validation/UserValidation")
const User = require("../models/userModel")
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const register = async (req, res) => {
    const { error, value } = userRegister.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const { userName, email, password } = value;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ 
            userName, 
            email, 
            password: hashedPassword 
        });

        return res.status(201).json({ 
            message: "User registered successfully", 
            userId: newUser._id 
        });
        
    } catch (err) {
        console.error(err); 
        return res.status(500).json({ message: "Server error" });
    }
};


const login = async (req, res) => {
    const { error, value } = userLogin.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }   
    try {
        const { email, password ,role} = value;
        // if (role == 'user') {
        //     return res.status(200).json({ message: "im a User" });
        // }else if (role == 'admin') {
        //     return res.status(200).json({ message: "im an Admin" });
        // }
        const user = await User.findOne({ email }); 
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }   

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        
const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET || "YOUR_JWT_SECRET", 
            { expiresIn: "1d" } 
        );        return res.status(200).json({ message: "Login successful", token });
        
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    register,
    login
}

