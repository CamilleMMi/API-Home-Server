const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('\nConnected to MongoDB');
    } catch (error) {
        console.error('\n The connection to MongoDB failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;