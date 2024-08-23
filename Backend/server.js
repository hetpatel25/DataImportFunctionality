import express from "express";
import connectDB from "./db.js";
import { config } from 'dotenv';
import routes from "./Routes.js";

import cors from 'cors';



config();

connectDB(); 


const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

const PORT = process.env.PORT || 9000;


app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));