import { Router } from 'express';

import ProductController from '../controllers/product.controller';
import validProductMiddleware from '../middleware/valid.product.middleware';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', validProductMiddleware, productController.create);

export default productRouter;