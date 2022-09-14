import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

import { IUser } from '../interfaces';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body as IUser;

    const { status, data } = await this.userService.create(user);

    const token = jwt.sign({ user: data.username }, 'trybesmith');

    return res.status(status).json({ token });
  };
}