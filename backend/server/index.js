require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const logger = require('morgan');
const morganBody = require('morgan-body');

const passport = require('../config/passport.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger('dev'));
morganBody(app, {
  logReqDateTime: false,
  logReqUserAgent: false
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/career-deer", {promiseLibrary: bluebird})

app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//TODO enable once routes are fixed.
// const routes = require('../../routes/api/index.js');
// app.use(routes);

// Just a basic test route to hit for making sure everything was
// linking up properly for development and production.
app.get('/tests', (req, res) => {
  res.json('The backend is linked!');
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
