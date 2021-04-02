import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import { connect } from 'mongoose';
import { MONGO_URI } from './config/config';

import { tasksRoute } from './routes/tasks.route';
import { API } from './types/api.types';

const server = express();

connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.info('MongoDB connected - success.'))
  .catch((error) => console.error(error));

try {
  const swaggerDocument = require('./swagger.json');
  server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  console.error('Unable to read swagger.json', err);
}

// morgan
server.use(morgan('dev'));

// body-parser
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// cors
server.use(cors());

// routes
server.use(API.TASKS, tasksRoute);
server.use(API.USERS, tasksRoute);

const httpServer = require('http').Server(server);

export { httpServer };
