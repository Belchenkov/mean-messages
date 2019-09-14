const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const postsRoutes = require('./routes/posts');

mongoose.connect('mongodb://belchenkov:12qwasZX@ds217078.mlab.com:17078/mean_messages',
  { useNewUrlParser: true }
)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(err => {
    console.log(err);
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
    );
  next();
});

app.use('/api/posts', postsRoutes);

module.exports = app;
