import express from 'express'
import { createHotelHandler, deleteHotelHandler, getALLhotel } from '../../controllers/hotel-controller';
import { validateRequestBody } from '../../validations';
import { hotelSchema } from '../../validations/hotel-validator';



const hotelRouter = express.Router();
hotelRouter.post('/',validateRequestBody(hotelSchema),createHotelHandler)
hotelRouter.get('/', getALLhotel)
hotelRouter.delete('/:id', deleteHotelHandler)

export default hotelRouter;