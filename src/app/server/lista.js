import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.Google_api);

async function listar() {
  try {
    // Esse comando lista tudo o que a sua API KEY alcança
    const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.Google_api}`);
    const data = await result.json();
    
    console.log("--- MODELOS DISPONÍVEIS NA SUA CONTA ---");
    data.models.forEach(m => console.log("- " + m.name.replace('models/', '')));
  } catch (e) {
    console.error("Erro ao listar:", e.message);
  }
}
listar();