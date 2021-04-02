import express from 'express';
import { TasksController } from '../../src/controllers/tasks.controller';
import { API } from '../../src/types/api.types';

const tasksRoute = express.Router();
const controller = new TasksController();

tasksRoute.get(API.ALL, controller.tasksGetAll);
tasksRoute.get(API.CREATE, controller.taskCreate);
tasksRoute.get(API.ID, controller.taskGetById);
tasksRoute.get(API.ID, controller.taskUpdate);
tasksRoute.get(API.ID, controller.taskRemove);

export { tasksRoute };
