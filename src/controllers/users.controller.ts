import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

import { Request, Response } from 'express';
import { UsersModel } from '../../src/models/users.model';
import { errorHandler } from '../utils/errorHandler';
import { JWT_KEY } from '../../src/config/config';

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
      const candidate: any = await UsersModel.findOne({
        email: req.body.email,
      });

      if (!candidate) {
        res.status(404).json({ message: 'Такой пользователь не существует' });
        return;
      }

      const password = req.body.password;
      const comparePassword = bcryptjs.compareSync(
        password,
        candidate.password,
      );

      if (!comparePassword) {
        res.status(401).json({ message: 'Пароли не совпадают' });
        return;
      }

      const token = jsonwebtoken.sign(
        { email: candidate.email, userID: candidate._id },
        JWT_KEY,
        { expiresIn: 360 },
      );

      res.status(200).json({ token: `Bearer ${token}` });
    } catch (err) {
      errorHandler(res, err);
    }
  }
}
