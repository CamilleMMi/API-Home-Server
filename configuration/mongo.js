const mongoose = require('mongoose');
const configuration = require('./configuration');

const { mongodb_url } = configuration;

const connectDB = async () => {
    try {
        await mongoose.connect(mongodb_url, {
        });

        console.log('\nConnected to MongoDB');
    } catch (error) {
        console.error('\nThe connection to MongoDB failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;