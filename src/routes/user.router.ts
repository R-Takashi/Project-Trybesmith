import { Router } from 'express';

import UserController from '../controllers/user.controller';
import { validUsername, validClass, 
  validLevel, validPassword } from '../middleware/valid.user.middleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', validUsername, validClass, validLevel, validPassword, userController.create);

export default userRouter;