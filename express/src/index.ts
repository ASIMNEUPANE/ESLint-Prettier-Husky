import express from 'express';

const app = express();

let x = 0;

app.get('/', (req, res) => {
  res.json({
    message: 'Hi There',
  });
});
