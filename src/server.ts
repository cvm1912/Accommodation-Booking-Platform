import express, { NextFunction, urlencoded } from 'express';
import {Express} from "express";

import {loadEnv, serverConfig} from './configurations';import pingRouter from './routes/ping.router';
import v1Router from './routes/v1';
import {errorMiddleware} from './middlewares/error-middleware'


const app : Express= express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1', v1Router)


app.use(errorMiddleware)

app.listen(serverConfig.PORT,  () => console.log(`Server is listening on ${serverConfig.PORT}`));