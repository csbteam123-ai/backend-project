let express = require('express');
let tokenck = require('../middleware/token.ck');
let router = express.Router();

router.get('/logout',tokenck, (req, res) => {
    // Clear the token from session storage on logout
    res.json({ message: 'User logged out successfully',sesuss: true });
});

module.exports = router;