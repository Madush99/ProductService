import express from "express";
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()
//F9KqVy95EoJBQkjG


//connect database
connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Import routes
import productRoutes from './routes/productsRoutes.js';

app.use(express.json())

//Routes
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))