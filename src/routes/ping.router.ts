import express from 'express'
import { pingHandler } from '../controllers/ping.controller';
import { validateRequestBody } from '../validations';
import { pingSchema } from '../validations/ping-validator';

const pingRouter = express.Router();
pingRouter.post('/ping', validateRequestBody(pingSchema), pingHandler)

export default pingRouter;