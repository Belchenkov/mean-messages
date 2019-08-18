const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
    );
});

app.use('/api/posts', (req, res, next) => {
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
  const { post } = req.body;
  console.log(post);
  return res.status(201).json({
    message: 'Success'
  });
});

module.exports = app;
