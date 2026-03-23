import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {GoogleGenerativeAI} from '@google/generative-ai'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const genAI = GoogleGenerativeAI(process.env.Google_api)

app.post('/api/google', async (req,res) => {
    try {
        const {message} = req.body

        const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'})
        const result = await model.generateContent(message)
        const response = await result.response
        const text = response.text()

        return res.json({text})
    } catch (error) {
        return res.status(500).json({error: 'Erro ao chamar o gemini'})
        console.log('erro:', error)
    }
})

let port = 3002

app.listen(port, () => {
    console.log('servidor rodando na porta:', port)
})