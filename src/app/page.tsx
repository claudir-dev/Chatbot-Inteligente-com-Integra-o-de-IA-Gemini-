'use client'
import Image from "next/image";
import Navbar from "./components/navabar";
import Button from "./components/button"
import Input from "./components/input";
import { useEffect, useState } from "react";
export default function Home() {
  const [texto, settexto] = useState('')
  const [messagens, setmessagens] = useState()
  
  const server = async () => {
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

    
  }
  return (
   <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <div className=" flex flex-1 justify-center items-center sm:mt-80 mt-60 md:mt-60  ">
          <p className="text-white text-center sm:text-5xl text-4xl font-semibold mx-2">Seja bem vindo!! <span className=" block mt-2 text-blue-400 sm: text-4xl">pequeno gafanhoto</span></p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 pb-24">

      </div>
      <div className="sm:-space-x-10 fhd:-space-x-24 lg:-space-x-80 fixed sm:mb-15 mb-5 flex justify-around items-center bottom-0 w-full ">
        <Input value={texto} onChange={(e) => settexto(e.target.value)}></Input>
        <Button click={server} ></Button>
      </div>
   </div>
  )
}
