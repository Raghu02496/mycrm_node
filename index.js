import 'dotenv/config';
import express from 'express'
import { aiRouter } from './routes.js';

const app = express()
app.use('/ai', aiRouter)

app.listen(5000, ()=>{
  console.log("Server started")
})