import express from 'express';
const app = express();

const config = require('../config');

app.use('/', (req, res) => {
  res.status(200).send({ message: 'Todo ok' });
});

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});
