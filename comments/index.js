const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { comment } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, comment });

  commentsByPostId[req.params.id] = comments;

  res.status(200).send(comments);
});

app.listen(4001, () => {
  console.log('Listening on Port 4001');
});
