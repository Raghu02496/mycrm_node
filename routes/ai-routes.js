import{ Router } from 'express'
import { chatWithAI } from '../controllers/ai-controllers.js'

const aiRouter = Router()

aiRouter.post('/chat', chatWithAI)

export default aiRouter