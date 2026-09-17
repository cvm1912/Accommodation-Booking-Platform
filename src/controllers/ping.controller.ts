import {NextFunction, Request, Response} from 'express'
export const pingHandler = async (req:Request,res:Response, next: NextFunction): Promise<void>=>{
   try{
      await res.status(200).json({
      message:'pong',
      success:true
   })

   }catch(err){
    next(err) 
   }
  
}