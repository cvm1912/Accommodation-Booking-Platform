import {Request, Response, NextFunction} from 'express'

export const errorMiddleware=(err:any, req:Request, res:Response, next:NextFunction)=>{
    return res.status(501).json({
        success:false,
        message:"Something went wrong!"
    })
}

