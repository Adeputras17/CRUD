import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from './routes/userRoute.js';
const port = 4000

const app = express();

mongoose.connect('mongodb://localhost:27017/crud_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db = mongoose.connection;
db.on('error', (Error)=> console.log(Error));
db.once('open', ()=> console.log('database conected...'));

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(port || process.env.PORT, function () {
    console.log('server terhubung...' + port)
});