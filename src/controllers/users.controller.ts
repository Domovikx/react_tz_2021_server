import { Request, Response } from 'express';
import { TasksModel } from '../models/tasks.model';
import { errorHandler } from '../utils/errorHandler';

export class UsersController {
  async usersLogin(req: Request, res: Response) {
    try {
      const root = await TasksModel.find();
      res.status(200).json(root);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async usersRegister(req: Request, res: Response) {
    try {
      const root = await TasksModel.find();
      res.status(200).json(root);
    } catch (err) {
      errorHandler(res, err);
    }
  }
}
