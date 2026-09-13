import express from 'express';
import {Express} from "express";

import {loadEnv, serverConfig} from './configurations';


const app : Express= express();

app.get('/ping',(req,res) => res.send('pong'));
app.listen(serverConfig.PORT,  () => console.log(`Server is listening on ${serverConfig.PORT}`));