import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import config from '../config';
import './mongodb';
import { Logger } from './utils/';

const app = express();

// Configure middlewares
app.use(cors());

// configured for development and production only
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use('/', (req, res) => {
  res.status(200).send({ message: 'Todo ok' });
});

const server = app.listen(config.port, () => {
  Logger.info(`🚀 Server running on port ${config.port}`);
});

module.exports = { app, server };
