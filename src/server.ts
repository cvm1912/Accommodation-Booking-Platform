import express from 'express';
import {Express} from "express";

const app : Express= express();
const PORT : Number  = 8080;

app.get('/ping',(req,res) => res.send('pong'));
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));