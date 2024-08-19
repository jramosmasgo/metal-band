import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface CardProductInterface {
    img: string
}

const CardProduct: React.FC<CardProductInterface> = ({ img }) => {
    return (
        <div className="bg-white rounded-3xl md:w-1/3 w-80 overflow-hidden relative group">
            <img src={img} alt="" />
            <button className="flex items-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaWhatsapp /> Comprar
            </button>
        </div>
    )
}

export default CardProduct