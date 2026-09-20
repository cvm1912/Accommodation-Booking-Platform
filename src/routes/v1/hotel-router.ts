import express from 'express'
import { createHotelHandler, getALLhotel } from '../../controllers/hotel-controller';
import { validateRequestBody } from '../../validations';
import { hotelSchema } from '../../validations/hotel-validator';



const hotelRouter = express.Router();
hotelRouter.post('/',validateRequestBody(hotelSchema),createHotelHandler)
hotelRouter.get('/', getALLhotel)

export default hotelRouter;