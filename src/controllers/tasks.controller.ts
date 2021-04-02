import { Request, Response } from 'express';
import { TasksModel } from '../models/tasks.model';
import { errorHandler } from '../utils/errorHandler';

export class TasksController {
  async tasksGetAll(req: Request, res: Response) {
    try {
      const root = await TasksModel.find();
      res.status(200).json(root);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async taskCreate(req: any, res: Response) {
    try {
      const player = await TasksModel.findByIdAndUpdate(
        { _id: req.body.id },
        req.body.player,
      );
      res.status(200).json(player);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async taskGetById(req: Request, res: Response) {
    try {
      const player = await TasksModel.findById(req.params.id);
      res.status(200).json(player);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async taskUpdate(req: Request, res: Response) {
    const category = new TasksModel(req.body.player);
    try {
      await category.save();
      res.status(201).json(category);
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
