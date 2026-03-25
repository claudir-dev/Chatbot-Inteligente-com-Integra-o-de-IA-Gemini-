'use client'
interface inputProps {
    value: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({value, onChange}: inputProps) {
    return (
        <div>
            <input className=" text-black outline-0 xl:w-200 sm:w-200 bg-gray-400 p-3 rounded-xl flex-1 w-70" type="text" value={value} onChange={onChange} placeholder="Em que posso ajudar?" />
        </div>
    )
}