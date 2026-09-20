import express from 'express'
import { createHotelHandler } from '../../controllers/hotel-controller';
import { validateRequestBody } from '../../validations';
import { hotelSchema } from '../../validations/hotel-validator';



const hotelRouter = express.Router();
hotelRouter.post('/',validateRequestBody(hotelSchema),createHotelHandler)

export default hotelRouter;