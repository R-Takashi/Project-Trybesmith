import { Request, Response } from 'express';

import ProductService from '../services/product.service';

import { IProduct } from '../interfaces';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body as IProduct;

    const { status, data } = await this.productService.create(product);
    res.status(status).json(data);
  };
}
