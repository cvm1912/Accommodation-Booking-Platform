import express, { Express } from 'express';
import logger from './config/logger';
import { serverConfig } from './config';
import v1Router from './routes/v1';
import { errorMiddleware } from './middlewares/error-middleware';
import { attachCorrelationalId } from './middlewares/corelation-middleware';
import sequelize from './db/models/sequelize';
import Hotel from './db/models/hotel';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(attachCorrelationalId);
app.use('/api/v1', v1Router);
app.use(errorMiddleware);

app.listen(serverConfig.PORT, async () => {
    logger.info(`Server is listening on ${serverConfig.PORT}`);
    try {
        await sequelize.authenticate();
        logger.info('DB Connected');
        const hotel = await Hotel.create({
            name: 'test',
            address: 'test desc',
            location: 'test loc',
            rating: 5,
            rating_count: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        logger.info(`Hotel created: ${JSON.stringify(hotel)}`);
    } catch (e) {
        logger.error(e);
    }
});
