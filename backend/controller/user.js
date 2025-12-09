const bcrypt = require("bcrypt")
const User = require("../models/user");
const { setUser , getUser } = require("./auth")

async function handleUserSignup(req, res) {
  const { username , email , password } = req.body;

  try {
    // Validate input
    // to-do:- add more validation like email format, password strength etc.
    if (!username || !password || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already taken." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    await User.create({
      username,
      password: hashedPassword,
      email,
    });

    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}

async function handleUserLogin(req, res) {
    const {email , password} = req.body;
    try {
        const user = await User.findOne({email})

        if (!user) return res.status(404).json({message : "User not Found"})

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({message : "Invalid Credentials"})

        const token = setUser(user);
        res.cookie("uid", token, {
            httpOnly: true, // Security best practice
            secure: process.env.RUN_ENV === 'production', // Use secure in prod
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
        res.json({message: "Login Successful", user: {username: user.username, email: user.email}})
    } catch (error) {
        console.error("Error during user login:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

async function handleUserProfile(req, res) {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });
    res.json({ user: req.user });
}

async function handleUserLogout(req, res) {
    try {
        // Clear the authentication cookie
        res.clearCookie("uid", {
            httpOnly: true,
            secure: process.env.RUN_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        });
        res.json({ message: "Logout successful" });
    } catch (error) {
        console.error("Error during logout:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

module.exports = {handleUserSignup, handleUserLogin, handleUserProfile, handleUserLogout};