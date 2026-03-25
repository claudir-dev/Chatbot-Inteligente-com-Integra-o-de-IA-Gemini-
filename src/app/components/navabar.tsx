'use client'
import Image from "next/image"

export default function navbar () {
    return (
        <div className="bg-slate-900 flex justify-start items-center t-0 fixed w-full border-b-black" >
            <div className="">
                <Image src='/icone.png' width={100} height={50} alt="Icone de robó"></Image>
            </div>
            <div className="">
                <p className="italic font-semibold text-2xl">Assistente Virtual</p>
            </div>
        </div>
    )
}