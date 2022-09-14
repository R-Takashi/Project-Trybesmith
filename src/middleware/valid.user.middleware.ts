import { NextFunction, Request, Response } from 'express';

const validUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  switch (user) {
    case !user.username:
      return res.status(400).json({ message: 'Username is required' });
    case !user.password:
      return res.status(400).json({ message: 'Password is required' });
    case !user.classe:
      return res.status(400).json({ message: 'Classe is required' });
    case !user.level:
      return res.status(400).json({ message: 'Level is required' });
    default:
  }
  next();
};

export default validUserMiddleware;