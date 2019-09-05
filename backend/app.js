const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://belchenkov:12qwasZX@ds217078.mlab.com:17078/mean_messages',
  { useNewUrlParser: true }
)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(err => {
    console.log(err);
  });

const Post = require('./models/post');

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

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'sdfsdf343434dfdf',
      title: 'First Post',
      content: 'This is coming from server'
    },
    {
      id: 'ererdf343434dfdf',
      title: 'Second Post',
      content: 'This is coming from server!'
    }
  ];

  return res.status(200).json({
    message: 'Success',
    posts
  });
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save();

  res.status(201).json({
    message: 'Success'
  });
});

module.exports = app;
