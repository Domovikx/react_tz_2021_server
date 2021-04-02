import express from 'express';
import { UsersController } from '../../src/controllers/users.controller';
import { API } from '../../src/types/api.types';

const tasksRoute = express.Router();
const controller = new UsersController();

tasksRoute.get(API.LOGIN, controller.usersLogin);
tasksRoute.get(API.REGISTER, controller.usersRegister);

export { tasksRoute };
