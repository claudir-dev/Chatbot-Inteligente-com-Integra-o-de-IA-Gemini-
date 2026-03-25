'use client'
import Image from "next/image"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props}: ButtonProps) {
  return (
    <button
    {...props}
      className="max-w-20 flex-none hover:scale-120 transition-all cursor-pointer "
    >
      <Image
        src="/enviar.png"
        alt="Ícone de enviar"
        width={30}
        height={50}  
      />
      {children}
    </button>
  )
}