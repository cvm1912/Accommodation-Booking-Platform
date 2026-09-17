import { AnyZodObject } from "zod/v3"
import { NextFunction, Request, Response } from "express"

export const validateQueryParams=(schema:AnyZodObject)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
           await schema.parseAsync(req.query);
           next();
        } catch (error) {
            return res.status(400).json({
                message:"Invalid Query Params",
                success:false,
                error:error
            })
        }
    }
}

export const validateRequestBody=(schema:AnyZodObject)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
           await schema.parseAsync(req.body);
           console.log("request ody is valid");
           next();
        } catch (error) {
            return res.status(400).json({
                message:"Invalid Request Body",
                success:false,
                error:error
            })
        }
    }
}