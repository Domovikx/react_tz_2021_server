import bcryptjs from 'bcryptjs';

import { Request, Response } from 'express';
import { UsersModel } from '../../src/models/users.model';
import { errorHandler } from '../utils/errorHandler';

export class UsersController {
  async usersRegister(req: Request, res: Response) {
    try {
      const candidate = await UsersModel.findOne({ email: req.body.email });

      if (candidate) {
        res.status(409).json({ message: 'Такой email уже существует' });
        return;
      }

      const salt = bcryptjs.genSaltSync(10);
      const password = req.body.password;
      const hashPassword = bcryptjs.hashSync(password, salt);

      const user = new UsersModel({
        email: req.body.email,
        password: hashPassword,
      });

      await user.save();
      res.status(201).json(user);
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async usersLogin(req: Request, res: Response) {
    try {
      const root = await UsersModel.find();
      res.status(200).json(root);
    } catch (err) {
      errorHandler(res, err);
    }
  }
}
