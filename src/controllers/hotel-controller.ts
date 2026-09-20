import { Request, Response, NextFunction } from "express";
import { createHotelDto } from '../Dto/Hotel-dto';
import { createHotelService } from "../service/hotel-service";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction):Promise<void>{
  try{
    // const hotelData : createHotelDto = req.body;
    const hotel = await createHotelService(req.body);

    //send response 
    res.status(200).json({ 
        message: 'Hotel created successfully', 
        success: true, 
        data: hotel 
    });
  } catch(err) {
    next(err);
  }
}
