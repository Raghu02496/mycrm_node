import express from 'express'
import { chatWithAI } from '../controllers/ai-controllers.js'

export const aiRouter = express.Router()

aiRouter.post('/chat', chatWithAI)