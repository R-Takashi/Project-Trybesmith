import { Router } from 'express';

import LoginController from '../controllers/login.controller';
import validLoginMiddleware from '../middleware/valid.login.middleware';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', validLoginMiddleware, loginController.verifyLogin);

export default loginRouter;