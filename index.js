const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('bodyParser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

