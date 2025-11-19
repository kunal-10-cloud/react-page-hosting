const {Router} = require('express');
const { handleUserSignup , handleUserLogin } = require('../controller/user');

const router = Router();



router.post('/signup', handleUserSignup);

module.exports = router;