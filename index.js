import 'dotenv/config';
import express from 'express'
import { aiRouter } from './routes.js';
import cors from "cors"

const app = express();
app.use(
  express.json(),
  cors({
    origin : 'http://localhost:4200'
  })
)
app.use('/ai', aiRouter)

app.listen(5000, ()=>{
  console.log("Server started")
})