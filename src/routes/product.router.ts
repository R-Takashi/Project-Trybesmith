import { Router } from 'express';

import ProductController from '../controllers/product.controller';
import { validProductName, validProductAmount } from '../middleware/valid.product.middleware';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', validProductName, validProductAmount, productController.create);

productRouter.get('/', productController.getAll);

export default productRouter;