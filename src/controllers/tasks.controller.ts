import { errorHandler } from '../utils/errorHandler';
import { Request, Response } from 'express';
import { TasksModel } from '../models/tasks.model';

export class TasksController {
  async tasksGetAll(req: Request, res: Response) {
    try {
      const root = await TasksModel.find();
      res.status(200).json(root);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async taskCreate(req: Request, res: Response) {
    const task = new TasksModel(req.body.task);
    try {
      await task.save();
      res.status(201).json(task);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async taskGetById(req: Request, res: Response) {
    try {
      const task = await TasksModel.findById(req.params.id);
      res.status(200).json(task);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async taskUpdate(req: Request, res: Response) {
    const { id, task } = req.body;
    try {
      const taskUpdated = await TasksModel.findByIdAndUpdate(id, task, {
        new: true,
      });
      res.status(200).json(taskUpdated);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async taskRemove(req: Request, res: Response) {
    try {
      await TasksModel.remove({ _id: req.params.id });
      res.status(200).json({
        message: 'Категория удалена.',
      });
    } catch (err) {
      errorHandler(res, err);
    }
  }
}
