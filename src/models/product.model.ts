import { Pool, ResultSetHeader } from 'mysql2/promise';

import { IProduct } from '../interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const [data] = await this.connection.execute<ResultSetHeader>(
      query, 
      [product.name, product.amount],
    );

    const { insertId: id } = data;

    return { id, ...product };
  }
}
