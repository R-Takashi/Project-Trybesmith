import { NextFunction, Request, Response } from 'express';

import { IProduct } from '../interfaces';

const validProductMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body as IProduct;

  if (!product.name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  if (!product.amount) {
    return res.status(400).json({ message: 'Amount is required' });
  }
  next();
};

export default validProductMiddleware;