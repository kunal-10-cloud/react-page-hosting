const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "dev_secret"; // Fallback for dev if env missing

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        username: user.username
    }, secret);
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null; // Invalid token
    }
}

module.exports = { setUser, getUser };