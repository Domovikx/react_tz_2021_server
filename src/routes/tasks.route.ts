import express from 'express';
import passport from 'passport';
import { API } from '../types/api.types';
import { TasksController } from '../controllers/tasks.controller';

export const tasksRoute = express.Router();
const controller = new TasksController();

tasksRoute.get(API.ALL, controller.tasksGetAll);
tasksRoute.post(API.CREATE, controller.taskCreate);
tasksRoute.get(API.ID, controller.taskGetById);
tasksRoute.patch(API.ID, controller.taskUpdate);
tasksRoute.delete(
  API.ID,
  passport.authenticate('jwt', { session: false }),
  controller.taskRemove,
);
