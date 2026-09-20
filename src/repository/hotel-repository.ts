import logger from '../config/logger';
import Hotel from '../db/models/hotel'
import { createHotelDto } from '../Dto/Hotel-dto';
import { NotFoundError } from '../utils/Errors/app-error';

export async function createHotel(hotelData:createHotelDto){
    const hotel  = await Hotel.create({
        name:hotelData.name,
        address:hotelData.address,
        location:hotelData.location,
        rating:hotelData.rating,
        rating_count:hotelData.rating_count
    });

    logger.info(`Hotel created: ${hotel.id}`);
    return hotel;
}

export async function getHotelById(Id: number){
    const hotel = await Hotel.findByPk(Id);
    if(!hotel){
        logger.error(`Hotel not found: ${Id}`);
        throw new NotFoundError(`Hotel not found with id ${Id}`);
    }

    logger.info(`Hotel found: ${hotel.id}`);

    return hotel;
}

export async function getHotels(){
    const hotels = await Hotel.findAll();
    if(!hotels){
        logger.error(`Hotels not found`);
        throw new NotFoundError(`Hotels not found`);
    }
    logger.info(`Hotels found: ${hotels.length}`);
    return hotels;
}