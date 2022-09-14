import { Router } from 'express';

import OrderController from '../controllers/order.controller';
import validToken from '../middleware/valid.token.middleware';
import validOrder from '../middleware/valid.order.middleware';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);

orderRouter.post('/', validToken, validOrder, orderController.create);

export default orderRouter;