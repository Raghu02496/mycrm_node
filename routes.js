import express from 'express'
import { chatWithAI } from './ai-controller.js'

export const aiRouter = express.Router()

aiRouter.post('/chat', chatWithAI)