import { Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';
import { asyncLocalStorage } from '../helpers/request-helper';

export const attachCorrelationalId = (req: Request, res: Response, next: NextFunction) => {
    const correlationId = uuid();
    req.headers['x-correlation-id'] = correlationId;
    asyncLocalStorage.run({ correlationId }, () => {
        next();
    });
};
