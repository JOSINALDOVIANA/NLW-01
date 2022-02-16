import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import axios from './services/axios';
import routes from './routes';
import path from'path';
const app=express();
// app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
app.use("/imagens",express.static(path.resolve(__dirname,"..","uploads")));
app.use(routes);







app.listen(3333);


// const url = require("url");
