import express, { Express } from 'express';
import logger from './config/logger';
import { serverConfig } from './config';
import v1Router from './routes/v1';
import { errorMiddleware } from './middlewares/error-middleware';
import { attachCorrelationalId } from './middlewares/corelation-middleware';
import sequelize from './db/models/sequelize';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(attachCorrelationalId);
app.use('/api/v1', v1Router);
app.use(errorMiddleware);

app.listen(serverConfig.PORT, async () => {
    logger.info(`Server is listening on ${serverConfig.PORT}`);
    sequelize.authenticate();
    logger.info('DB Connected successfully');
    }
);
