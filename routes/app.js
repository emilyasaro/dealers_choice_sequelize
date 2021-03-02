const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/dojos', require('./dojos.js'));
app.use('/martialartists', require('./martialartists.js'));
app.use('/join', require('./join.js'));

app.use(express.static(path.join(__dirname, '..', 'public')));


module.exports = app;



