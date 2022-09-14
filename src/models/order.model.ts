import { Pool } from 'mysql2/promise';

import { IOrder } from '../interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const query = `
      SELECT
        o.id AS id, u.id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM
        Trybesmith.Orders AS o
      INNER JOIN
        Trybesmith.Users AS u
          on o.userId = u.id
      INNER JOIN
        Trybesmith.Products AS p
          on o.id = p.orderId
      GROUP BY
        o.id
      ORDER BY
        o.userId`;

    const [data] = await this.connection.execute(query);

    return data as IOrder[];
  }
}