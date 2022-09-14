import ProductModel from '../models/product.model';
import connection from '../models/connection';

import { IProduct, IProductService } from '../interfaces';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProductService> {
    const data = await this.model.create(product);
    const newProduct = { status: 201, data };
    return newProduct;
  }
}