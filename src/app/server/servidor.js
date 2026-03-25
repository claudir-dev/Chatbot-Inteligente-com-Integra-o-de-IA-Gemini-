import express from 'express'
import cors from 'cors'
import { GoogleGenerativeAI } from '@google/generative-ai' // Certifique-se que instalou este!
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// 1. Verifique se a chave existe antes de começar
const apiKey = process.env.Google_api; // Use o nome EXATO que está no seu .env

if (!apiKey) {
    console.error("❌ ERRO: Chave 'Google_api' não encontrada no .env");
}

const genAI = new GoogleGenerativeAI(apiKey)

app.post('/api/google', async (req, res) => {
    const { texto } = req.body
    
    try {
        if (!texto) {
            return res.status(400).json({ error: "Texto é obrigatório" })
        }

        // 2. Inicialize o modelo DENTRO da rota ou certifique-se que ele existe
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

        // Verificação de segurança para o erro que você recebeu:
        if (!model) {
            throw new Error("Falha ao inicializar o modelo Gemini.");
        }

        // 3. Chamada simplificada
        const result = await model.generateContent(texto)
        const response = await result.response
        const text = response.text()

        return res.json({ text })

    } catch (error) {
        console.error('Erro detalhado no servidor:', error)
        return res.status(500).json({ 
            error: 'Erro ao processar sua solicitação',
            details: error.message 
        })
    }
})

let port = 3002
app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port)
})