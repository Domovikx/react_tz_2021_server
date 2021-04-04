import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import { API } from './types/api.types';
import { connect } from 'mongoose';
import { MONGO_URI } from './config/config';
import { passportMiddleware } from './middleware/passport.middleware';
import { tasksRoute } from './routes/tasks.route';
import { usersRoute } from './routes/users.route';

const server = express();

connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.info('MongoDB connected - success.'))
  .catch((error) => console.error(error));

// swagger
try {
  const swaggerDocument = require('./swagger.json');
  server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  console.error('Unable to read swagger.json', err);
}

// passport
server.use(passport.initialize());
passportMiddleware(passport);

// morgan
server.use(morgan('dev'));

// parser
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// cors
server.use(cors());

// routes
server.use(API.TASKS, tasksRoute);
server.use(API.USERS, usersRoute);

const httpServer = require('http').Server(server);

export { httpServer };
