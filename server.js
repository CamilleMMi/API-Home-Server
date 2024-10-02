const express = require('express');
const errorMiddleware = require('./middleware/errorMiddleware');
//const cors = require('cors');
const configuration = require('./configuration/configuration');
const connectDB = require('./configuration/mongo');
// const routes = require('./routes');

const { port } = configuration;

connectDB();

const playgroundRoute = require('./routes/playgroundRoute');
const authRoute = require('./routes/authRoute');

// const corsOptions = {
//     origin: [front_end, 'http://quelquechose.com'],
//     optionsSuccessStatus: 200
// }

const app = express();

//app.use(cors(corsOptions));
app.use(express.json());

// routes(app);

app.use('/playground', playgroundRoute);
app.use('/auth', authRoute);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));