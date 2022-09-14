import { Request, Response } from 'express';

import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const { status, data } = await this.orderService.getAll();
    return res.status(status).json(data);
  };
}