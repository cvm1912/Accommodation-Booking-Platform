import { Request, Response, NextFunction } from "express";
import { createHotelDto } from '../Dto/Hotel-dto';
import { createHotelService, getAllHotels, DeleteHotelService } from "../service/hotel-service";

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

export async function getALLhotel(req:Request, res:Response, next:NextFunction){
    try{
        const hotelResponse = await getAllHotels();
        res.status(200).json({
            message:'Fetched all hotels',
            success:true,
            data:hotelResponse
        });
    }catch(err){
        next(err);
    }
}


export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction){
    try {
        const id = Number(req.params.id);
        const hotelResponse = await DeleteHotelService(id);
        res.status(200).json({
            message: 'Hotel deleted successfully',
            success: true,
            data: hotelResponse
        });
    } catch (err) {
        next(err);
    }
}