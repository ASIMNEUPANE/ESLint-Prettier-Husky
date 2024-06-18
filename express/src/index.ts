import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.json({
    message: 'Hi There',
  });
  //   npx eslint --fix   cmd to fix or format
});

//we dont use eslint for styling/formatin we use preetier
