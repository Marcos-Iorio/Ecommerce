import React from "react";
import { Link } from 'react-router-dom'
import LogoFooter from './logo-footer.png'
import AdidasLogo from './adidas-9.svg'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return(
        <div className="bg-[#02236d] h-[300px]">
            <div className="grid grid-cols-3 place-content center h-full">
                <div className="p-5 flex flex-col items-center justify-center">
                    <div className="text-yellow-500 text-lg text-center p-5"><strong>Contacto</strong></div>
                    <ul className="list-none">
                        <li className="text-white text-lg before:content-['\2022'] before:text-yellow-500 before:font-bold before:text-[25px] before:inline-block before:w-4 before:ml-[-1em]">Brandsen 805, Capital Federal</li>
                        <li className="text-white text-lg before:content-['\2022'] before:text-yellow-500 before:font-bold before:text-[25px] before:inline-block before:w-4 before:ml-[-1em]">5777-1200</li>
                        <li className="text-white text-lg before:content-['\2022'] before:text-yellow-500 before:font-bold before:text-[25px] before:inline-block before:w-4 before:ml-[-1em]">marketing@bocajuniors.com.ar</li>
                    </ul>
                </div>
                <div className="p-5 flex flex-col items-center justify-center">
                    <img src={LogoFooter} alt="Escudo de boca 1981" className="w-32"/>
                    <img src={AdidasLogo} alt="" className="w-24" />
                </div>
                <div className="p-5 flex flex-col justify-center items-center">
                    <div className="text-yellow-500 text-lg text-center p-5"><strong>Seguinos</strong></div>
                    <div className="flex flex-row justify-center items-center p-[4px]">
                        <div className="p-5"><AiFillYoutube className="text-4xl text-white hover:text-red-700"></AiFillYoutube></div>
                        <div className="p-5"><AiOutlineInstagram className="text-4xl text-white hover:text-purple-500"></AiOutlineInstagram></div>
                        <div className="p-5"><AiOutlineTwitter className="text-4xl text-white hover:text-cyan-500"></AiOutlineTwitter></div>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}

export default Footer;