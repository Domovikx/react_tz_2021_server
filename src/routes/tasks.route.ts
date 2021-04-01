import express from 'express';

import { RootController } from '../controllers/root.controller';
import { API_TASKS } from '../types/tasks.types';

const tasksRoute = express.Router();
const controller = new RootController();

tasksRoute.get(API_TASKS.all, controller.getAll);

export { tasksRoute };
