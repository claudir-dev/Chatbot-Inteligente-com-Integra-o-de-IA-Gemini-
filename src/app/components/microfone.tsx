'use client'
import React, { ChangeEvent, HtmlHTMLAttributes } from "react";
import { FaMicrophone } from "react-icons/fa";

interface MicroPros {
    onClick ? : (e:React.MouseEvent<SVGAElement>) => void,
    className: string
}

export default function Microfone({onClick, className, ...props}: MicroPros) {
    return (
        <div {...props} className={`absolute left-68 lg:left-210 z-50 ${className}`}>
            <FaMicrophone className="scale-130 text-black cursor-pointer" onClick={onClick}></FaMicrophone>
        </div>
    )
}