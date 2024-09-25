const asyncHandler = require('express-async-handler');

// Throw a fake error
const errorPlayground = (req, res) => {
    throw new Error('fake error');
}

const playgroundController = (req, res) => {
    console.log(`Welcome ${req.user.firstName}`);
}

module.exports = {
    errorPlayground,
    playgroundController
}