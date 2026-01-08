import 'dotenv/config';
import express from 'express'
import aiRouter from './routes/ai-routes.js';
import cors from "cors"
import http from "http"

const app = express();
app.use(
  express.json(),
  cors({
    origin : process.env.ORIGIN
  })
)
app.use('/ai', aiRouter)

const server = http.createServer(app)
server.listen(5000, ()=>{
  console.log("Server started")
})