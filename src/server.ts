import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';

import { connect } from 'mongoose';
import { Request, Response } from 'express';
import { MONGO_URI } from './config/config';

import { COLLECTION } from './types/collection.types';
import { tasksRoute } from './routes/tasks.route';

const server = express();

connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.info('MongoDB connected - success.'))
  .catch((error) => console.error(error));

// Server check - (GET) http://localhost:3000
server.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// morgan
server.use(morgan('dev'));

// body-parser
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// cors
server.use(cors());

// routes
server.use(`/api/${COLLECTION.tasks}`, tasksRoute);

const httpServer = require('http').Server(server);

export { httpServer };
