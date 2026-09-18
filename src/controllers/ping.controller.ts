import {NextFunction, Request, Response} from 'express'
import logger from '../config/logger'
export const pingHandler = async (req:Request,res:Response, next: NextFunction)=>{
   try{
      logger.info("ping request recieved")
      res.status(200).json({
      message: req.body.message,
      success:true
   })

   }catch(err){
    next(err) 
   }
  
}