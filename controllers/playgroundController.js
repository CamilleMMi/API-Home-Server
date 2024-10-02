const asyncHandler = require('express-async-handler');

// Throw a fake error
const errorPlayground = (req, res) => {
    throw new Error('fake error');
}

const adminPlayground = (req, res) => {
    console.log(`Welcome ${req.user.firstName}`);
    res.json({test: `Hello user ${req.user.firstName}`});
}

module.exports = {
    errorPlayground,
    adminPlayground
}