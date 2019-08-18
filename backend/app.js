const express = require('express');

const app = express();

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

module.exports = app;
