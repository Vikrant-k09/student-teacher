const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const winston = require('winston');



const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://student-teacher-app-52319.firebaseio.com"
});

const app = express();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'logfile.log' })
    ]
});

app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Welcome to the Student-Teacher Booking System');
// });
app.get('/', (req, res) => {
    logger.info('Root route accessed');
    res.send('Welcome to the Student-Teacher Booking System');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
