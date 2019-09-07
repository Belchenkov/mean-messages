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
  Post.find()
    .then(docs => {
      return res.status(200).json({
        message: 'Posts fetched successfully',
        posts: docs
      });
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

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id})
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Post deleted!'
      });
    });
});

module.exports = app;
