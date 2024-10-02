const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const login = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const authToken = await user.generateAuthToken();

        res.json({ user, authToken });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const register = asyncHandler(async(req, res) => {
    const { firstName, lastName, email, password, iconUri } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            res.status(500).json({ message: "This email is aldery used" });
        }

        user = new User({ firstName, lastName, email, password, iconUri });
        await user.save();

        const authToken = await user.generateAuthToken();

        res.status(201).json({ user, authToken});
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    login,
    register
}