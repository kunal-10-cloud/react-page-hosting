const {Router} = require('express');
const { handleUserSignup , handleUserLogin, handleUserProfile, handleUserLogout } = require('../controller/user');

const router = Router();



const { authUser } = require('../middlewares/auth');

router.post('/signup', handleUserSignup);
router.post('/login', handleUserLogin);
router.get('/profile', authUser, handleUserProfile);
router.post('/logout', handleUserLogout);

module.exports = router;