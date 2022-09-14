import { NextFunction, Request, Response } from 'express';

import { ILogin } from '../interfaces';

const validLoginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const login = req.body as ILogin;

  if (!login.username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!login.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

export default validLoginMiddleware;