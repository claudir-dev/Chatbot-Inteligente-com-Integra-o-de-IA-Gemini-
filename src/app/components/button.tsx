'use client'
import Image from "next/image"

interface ButtonProps {
  click: () => void
  
}

export default function Button({ click }: ButtonProps) {
  return (
    <button
      onClick={click}
      className="max-w-20 flex-none "

    >
      <Image
        src="/enviar.png"
        alt="Ícone de enviar"
        width={30}
        height={48}
        className=""
      />
    </button>
  )
}