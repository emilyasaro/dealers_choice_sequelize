const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', require('./dojos.js'));
app.use('/martialartists', require('./martialartists.js'));
app.use('/join', require('./join.js'));




module.exports = app;



