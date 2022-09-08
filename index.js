require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/mongoose');

const app = express();

const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // for handling routes
// app.use('/', require('./routes'));


// // for handling incorrect routes
// app.use((req, res, next) => {
//     const error = new Error("Not Found");
//     error.status = 404;
//     next(error);
// });
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

app.get('/ussd', (req, res) => {
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = "";

    if (text === '') {
        response = `Welcome to InsuranceDekho,
        Please select the product:
        1. Life
        2. Health
        3. Motor`;
    } else if (text === '2') {
        response = `Please select your gender:
        1. Male
        2. Female`;
    } else if (text === '2*1' || text === '2*2') {
        response = `Please enter your age:`;
    }

    res.set('Content-Type: text/plain');
    res.send(response);
});

app.listen(port, (err) => {
    if(err){
        console.log("There is an error in starting the server.", err);
        return;
    }
    console.log("Server is running on the port ", port);
});