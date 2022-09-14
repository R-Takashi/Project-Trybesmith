import OrderModel from '../models/order.model';
import connection from '../models/connection';

import { IOrder, IOrderService } from '../interfaces';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrderService> {
    const result = await this.model.getAll();
    const data = result as IOrder[];
    const orders = { status: 200, data };
    return orders;
  }
}