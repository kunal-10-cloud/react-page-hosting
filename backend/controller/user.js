const bcrypt = require("bcrypt")
const {v4 : uuidv4} = require("uuid")
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
    const user = await User.findOne({email , password})

    if (!user) res.status(404).json({message : "User not Found"})


      const sessionId = uuidv4();
      setUser(sessionId , user)
      res.cookie("uid" , sessionId)
    // to-do

}
module.exports = {handleUserSignup,handleUserLogin,};