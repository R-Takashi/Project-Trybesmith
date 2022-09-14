import { Router } from 'express';

import UserController from '../controllers/user.controller';
import validUserMiddleware from '../middleware/valid.user.middleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', validUserMiddleware, userController.create);

export default userRouter;