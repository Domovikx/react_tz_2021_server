import express from 'express';
import { UsersController } from '../../src/controllers/users.controller';
import { API } from '../../src/types/api.types';

const usersRoute = express.Router();
const controller = new UsersController();

usersRoute.post(API.LOGIN, controller.usersLogin);
usersRoute.post(API.REGISTER, controller.usersRegister);

export { usersRoute };
