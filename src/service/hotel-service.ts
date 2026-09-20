import { createHotelDto } from "../Dto/Hotel-dto";
import { createHotel, getHotelById } from "../repository/hotel-repository";

// Write Business Logic Here 

export async function createHotelService(hotelData:createHotelDto){
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id:number){
    const hotel = await getHotelById(id);
    return hotel;
}