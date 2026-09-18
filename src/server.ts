import express from 'express';
import { Express } from 'express';
import logger from './configurations/logger';
import { loadEnv, serverConfig } from './configurations';
import v1Router from './routes/v1';
import { errorMiddleware } from './middlewares/error-middleware';
import {attachCorrelationalId} from './middlewares/corelation-middleware'

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(attachCorrelationalId);
app.use('/api/v1', v1Router);
app.use(errorMiddleware);

app.listen(serverConfig.PORT, () => logger.info(`Server is listening on ${serverConfig.PORT}`));
