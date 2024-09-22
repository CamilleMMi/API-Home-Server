const express = require('express');
const mongoose = require('mongoose');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');
const configuration = require('./configuration/configuration');

const { mongodb_url, port, front_end } = configuration;

// const userRoute = require('./routes/userRoute');
// const collectionRoute = require('./routes/collectionRoute');
// const reminderRoute = require('./routes/reminderRoute');
const playgroundRoute = require('./routes/playgroundRoute');

const corsOptions = {
    origin: [front_end, 'http://quelquechose.com'],
    optionsSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/playground', playgroundRoute);

app.use(errorMiddleware);

mongoose.connect(mongodb_url).then(() => {
    console.log('\nConnected to MongoDB')
    app.listen(port, () => {
        console.log(`Node API app is running on port ${port}\n`)
    })
}).catch((error) => {
    console.log(error)
})