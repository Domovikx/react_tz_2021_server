import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import passport from 'passport';
import swaggerDocument from './swagger.json';
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
server.use(API.ROOT, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const httpServer = new http.Server(server);

export { httpServer };
