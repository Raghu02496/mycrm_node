import 'dotenv/config';
import express from 'express'
import { aiRouter } from './routes/ai-routes.js';
import cors from "cors"

const app = express();
app.use(
  express.json(),
  cors({
    origin : process.env.ORIGIN
  })
)
app.use('/ai', aiRouter)

app.listen(5000, ()=>{
  console.log("Server started")
})