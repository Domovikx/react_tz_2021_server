import express from 'express';
import { TasksController } from '../../src/controllers/tasks.controller';
import { API } from '../../src/types/api.types';

const tasksRoute = express.Router();
const controller = new TasksController();

tasksRoute.get(API.ALL, controller.tasksGetAll);
tasksRoute.post(API.CREATE, controller.taskCreate);
tasksRoute.get(API.ID, controller.taskGetById);
tasksRoute.patch(API.ID, controller.taskUpdate);
tasksRoute.delete(API.ID, controller.taskRemove);

export { tasksRoute };
