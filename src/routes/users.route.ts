import express from 'express';
import { API } from '../types/api.types';
import { UsersController } from '../controllers/users.controller';

export const usersRoute = express.Router();
const controller = new UsersController();

usersRoute.post(API.LOGIN, controller.usersLogin);
usersRoute.post(API.REGISTER, controller.usersRegister);
