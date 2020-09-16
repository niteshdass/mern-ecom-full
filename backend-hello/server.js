import express from 'express';
import data from'./data';
import dotenv from 'dotenv';
import config from './config';
import bodyParser from 'body-parser'
import path from "path"
import mongoose from 'mongoose'
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute'
dotenv.config();

const mongodbUrl = 'mongodb+srv://nitesh:siu33005@cluster0.1hngs.mongodb.net/five-ecom?retryWrites=true&w=majority';
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));
const app = express();
app.use(bodyParser.json());





app.use(bodyParser.json());
//app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
//app.use('/api/orders', orderRoute);



app.listen(5000, ()=>{ console.log("server start on 5000")})