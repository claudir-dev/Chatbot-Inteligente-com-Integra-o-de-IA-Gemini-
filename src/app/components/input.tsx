'use client'

import { HtmlHTMLAttributes } from "react"

interface inputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
    aoClicar ?: (e:React.MouseEvent<SVGAElement>) => void
    value: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({value, aoClicar, onChange}: inputProps) {
    return (
        <div className="object-cover">
            <input className=" text-black outline-0 xl:w-200 bg-gray-400 p-3 rounded-xl flex-1 w-60" type="text" value={value} onChange={onChange} placeholder="Em que posso ajudar?" />
        </div>
    )
}