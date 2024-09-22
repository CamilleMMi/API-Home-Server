const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV, MONGODB_URL, PORT, FRONT_END } = process.env;

module.exports = {
    env: NODE_ENV,
    mongodb_url: MONGODB_URL,
    port: PORT,
    front_end: FRONT_END,
}