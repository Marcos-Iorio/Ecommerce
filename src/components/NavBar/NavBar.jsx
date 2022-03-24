import React, {useRef, useState} from 'react';
import logo from './pngwing.com.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect';

import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { MdClear } from "react-icons/md";


const NavBar = () => {
    const openMenuMobile = useRef(null);
    const [open, isOpen] = useState(false);
    const openMenu = () =>{
        if(open === false){
            isOpen(true);
        }else{
            isOpen(false);
        }
    }
    if(!isMobile){
        return (
            <nav className="bg-[#02236d] shadow-lg h-500">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <li className="flex items-center py-4 px-2">
                                <Link to={'/'}><img src={logo} alt="Logo" className=" w-12 mr-2" /></Link>
                            </li>
                        </div>
                        <div className='flex'>
                            <ul className="md:flex flex-row items-center space-x-5">
                                <Link to={'/'}><li className="py-4 px-2 text-white border-b-4 border-yellow-400 font-semibold">Home</li></Link>
                                <Link to={'/tienda'}><li className="py-4 px-2 text-white font-semibold hover:text-yellow-400">Tienda</li></Link>
                                <Link to={'/sobre-nosotros'}><li className="py-4 px-2 text-white font-semibold hover:text-yellow-400">Nosotros</li></Link>
                                <Link to={'/contacto'}><li className="py-4 px-2 text-white font-semibold hover:text-yellow-400 ">Contacto</li></Link>
                            </ul>
                           
                        </div>
                        <div>
                            <ul className='flex items-center justify-center p-5 w-80'>
                                <Link to={'/login'}><li className="pt-2 pb-2 px-2 m-5 font-semibold transition-all delay-75 bg-yellow-400 rounded-lg hover:bg-white"><AiOutlineUser className="text-[24px] text-zinc-800"/></li></Link> 
                                <Link to={'/cart'}><li><CartWidget/></li></Link>  
                            </ul>
                            
                        </div>
                        
                    </div>
                </div>
            </nav>
        );
    }else if(isMobile){
        return(
            <div>
                <nav className="bg-[#02236d] shadow-lg h-22">
                    <div className="max-w-6xl mx-auto px-4 bg-[#02236d] h-full">
                        <div className="flex justify-between">
                            <div className="flex space-x-10">
                                <li className="flex items-center py-4 px-2">
                                    <AiOutlineMenu onClick={openMenu} className="m-5 text-white text-3xl"></AiOutlineMenu>
                                    <Link to={'/'}><img src={logo} alt="Logo" className=" w-12 mr-2" /></Link>
                                </li>
                            </div>
                            <div>
                                <ul className='flex items-center justify-center p-5 w-50'>
                                    <Link to={'/login'}><li className="pt-2 pb-2 px-2 m-5 font-semibold transition-all delay-75 bg-yellow-400 rounded-lg hover:bg-white"><AiOutlineUser className="text-[24px] text-zinc-800"/></li></Link> 
                                    <Link to={'/cart'}><li><CartWidget/></li></Link>  
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={open === true ? 'fixed h-full w-full z-50 bg-yellow-400 top-0 translate-x-0 transition duration-150 ease' : 'fixed h-full w-full z-50 top-0 translate-x-[1000px] transition duration-150 ease'} ref={openMenuMobile}>
                    <div className='h-full'>
                        <MdClear onClick={openMenu} className="m-5 text-[#02236d] text-3xl"></MdClear>
                        <div className='h-full'>
                            <ul className="grid grid-cols-1 justify-items-center">
                                <Link to={'/'}><li className="py-4 px-2 text-[#02236d] text-xl border-b-4 border-[#02236d] font-semibold">Home</li></Link>
                                <Link to={'/tienda'}><li className="py-4 px-2 text-[#02236d] text-xl font-semibold hover:text-white">Tienda</li></Link>
                                <Link to={'/sobre-nosotros'}><li className="py-4 px-2 text-[#02236d] text-xl font-semibold hover:text-white">Nosotros</li></Link>
                                <Link to={'/contacto'}><li className="py-4 px-2 text-[#02236d] text-xl font-semibold hover:text-white ">Contacto</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default NavBar;