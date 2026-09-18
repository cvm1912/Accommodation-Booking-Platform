import { ZodObject, ZodTypeAny } from 'zod';
import { NextFunction, Request, Response } from 'express';
import logger from '../configurations/logger';

export const validateQueryParams = (schema: ZodObject<Record<string, ZodTypeAny>>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info('Validating Query Params');
            await schema.parseAsync(req.query);
            logger.info('Query params are valid');
            next();
        } catch (error) {
            logger.error('Query params are Invalid');
            return res.status(400).json({ message: 'Invalid Query Params', success: false, error });
        }
    };
};

export const validateRequestBody = (schema: ZodObject<Record<string, ZodTypeAny>>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info('Validating request body');
            await schema.parseAsync(req.body);
            logger.info('Request body is valid');
            next();
        } catch (error) {
            logger.error('Request body is Invalid');
            return res.status(400).json({ message: 'Invalid Request Body', success: false, error });
        }
    };
};
