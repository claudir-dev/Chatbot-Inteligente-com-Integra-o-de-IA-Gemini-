import { ButtonHTMLAttributes } from "react";
import { IoMdAdd } from "react-icons/io";

interface AddPros {
    aoClicar ?: () => void
}

export default function Add ({aoClicar, ...pros} : AddPros) {
    return (
        <div onClick={aoClicar} className="bg-gray-400 lg:hover:scale-110 lg:p-4 cursor-pointer w-12 h-12 transition-all duration-300 rounded-full flex justify-center items-center">
                <IoMdAdd className="text-black scale-130 " ></IoMdAdd>
        </div>
    )
}