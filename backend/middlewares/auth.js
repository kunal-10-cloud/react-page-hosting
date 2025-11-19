const { getUser } = require("../controller/auth");

async function authUser(req, res, next) {
  const userId = req.cookies.uid;

  if (!userId) {
    return res.status(401).send("Unauthorized");
  }

  const user = getUser(userId);

  if (!user) {
    return res.status(401).send("Unauthorized");
  }

  req.user = user;
  next();
}

module.exports = {authUser};
