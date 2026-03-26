'use client'
import Image from "next/image";
import Navbar from "./components/navabar";
import Button from "./components/button"
import Input from "./components/input";
import CardErro from "./components/card_error";
import { useEffect, useRef, useState } from "react";
export default function Home() {

  const [texto, settexto] = useState('')
  const [messagens, setmessagens] = useState('')
  const [desabilita, setdesabilita] = useState(false)
  const [invalido, setinvalido] = useState(false)
  const [rootMsg, setrootMsg] = useState('')
  const [animacao, setanimacao] = useState(false)
  const [img, setimg] = useState(false)
  const [user, setuser] = useState<Mensagem[]>([])
  const chatref = useRef<HTMLDivElement>(null)

    type Mensagem = {
      texto:string, tipo: 'user' | 'bot'
    }
  
  const server = async (e? : React.BaseSyntheticEvent) => {
    if(e) {
      e.preventDefault()
    }

    if(!texto.trim()) {
      setmessagens('Dado invalido')
      setinvalido(true)
      setTimeout(() => {setinvalido(false)}, 6000)
      return
    }

    setuser((prev) => [
      ...prev, {
        texto: texto, tipo: 'user'

      }
    ])

    settexto('')

    const intents = {
      portfolio: [
        "portfólio",
        "portfolio",
        "projetos",
        "trabalhos",
        "github",
        "ver projetos"
      ],
      contato: [
        "contato",
        "falar com você",
        "email",
        "whatsapp"
      ]
    }

    function DetectarIntent(texto: string) {
      const normaliza = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      for (const intent in intents) {
        const key = intent as keyof typeof intents
        for (const palavra of intents[key]) {
          if(normaliza.includes(palavra)) {
            return intent
          }
        }
      }
      return null
    }
    
    const exist = DetectarIntent(texto)

    if(exist) {
      alert('ola')
    } else {
      try {
        setimg(true)
        setanimacao(true)
        setdesabilita(true)
        const req = await fetch('http://localhost:3002/api/google', {
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify({texto})
        })

        const response = await req.json()
        setmessagens(response.text)
        console.log(response)

        if(!req.ok) {
          setmessagens('Erro interno no servidor! Estamos verificando...')
          setinvalido(true)
          setTimeout(() => {setinvalido(false)},6000)
          return
        }


        setuser((prev) => [
          ...prev, {
            texto: response.text, tipo: 'bot'
          }
        ])


      } catch (error) {
        console.log('Erro ao chama a API do gemini', error)

        setTimeout(() => {
          setmessagens('Erro interno na requisição para api.')
          setinvalido(true)
        },6000)
        setinvalido(false)

      } finally {
        setdesabilita(false)
        setanimacao(false)
      }  
    }
    
    useEffect(() => {
        chatref.current?.scrollTo({
          top: chatref.current.scrollHeight,
          behavior: 'smooth'
        })
      },[messagens])

  }
  return (
   <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      {invalido && (
        <CardErro>{messagens}</CardErro>
      )}
      <div className="overflow-y-auto scroll-hidden">
        <div className=" flex justify-center items-center sm:mt-80 mt-80 md:mt-60 z-0 relative  ">
            <p className="text-white text-center sm:text-5xl text-4xl font-semibold mx-2">Seja bem vindo!! <span className=" block mt-2 text-blue-400 sm: text-4xl">pequeno gafanhoto</span></p>
        </div>
        <div ref={chatref} className="flex flex-col z-0 space-y-8 m-2 p-4 pb-24">
          {user.map((msg, index) => (
            <div key={index} className={`${msg.tipo == 'user'? 'flex justify-end': 'flex justify-start'}`}>

              {msg.tipo === 'bot' && (
                
                    <div className={`${animacao? 'flex': ''}`}>
                      {img && (
                          <div>
                          <Image src='/icone.png' alt="icone bot" width={70} height={30}></Image>
                        </div>
                      )}
                      
                      {animacao && (
                        <div className="flex items-center justify-center space-x-2 ">
                          <span className="h-3 w-3 animate-bounce duration-700 rounded-full bg-blue-50 [animation-delay:-0.3s]"></span>
                          <span className="h-3 w-3 animate-bounce duration-700 rounded-full bg-blue-50 [animation-delay:-0.15s]"></span>
                          <span className="h-3 w-3 animate-bounce duration-700 rounded-full bg-blue-50"></span>
                        </div>
                      )}
                      
                    </div>
              )}
                <div className={` ${msg.tipo == 'user'? 'bg-blue-500': 'bg-slate-800/80'} max-w-[75%] p-4 rounded-2xl text-xl break-all whitespace-pre-wrap text-amber-50 `}>
                    {msg.texto}
                </div>
            </div>   
          ))}

          
        </div>
      </div>  
      <div className="sm:-space-x-10 lg:-space-x-80 fixed sm:mb-15 mb-5 flex justify-around items-center bottom-0 w-full ">
        <Input value={texto} onChange={(e) => settexto(e.target.value)}></Input>
        <Button disabled={desabilita} onClick={server} ></Button>
      </div>
   </div>
  )
}
