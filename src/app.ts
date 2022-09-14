import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middleware/http.erro.middleware';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.productRouter);

app.use(httpErrorMiddleware);

export default app;
