import React, {useRef, useState} from 'react';
import logo from './pngwing.com.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect';

import { AiOutlineUser, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
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
                            <div className="md:flex flex-row items-center space-x-7 w-[325px]">
                                <form action="/items" method='GET' className='flex justify-around w-full'>
                                    <input type="search" name="search" id="search" placeholder='Busca un producto..' className='w-[80%] rounded-md p-2 outline-none' />
                                    <button className='text-black text-2xl p-1 rounded-md bg-yellow-500' ><AiOutlineSearch></AiOutlineSearch></button>
                                </form>
                            </div>
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
                            <div className="grid grid-cols-1 justify-items-center">
                                <form action="/items" method='GET' className='flex justify-around w-full'>
                                    <input type="search" name="search" id="search" placeholder='Busca un producto..' className='w-[80%] rounded-md p-2 outline-none' />
                                    <button className='text-white text-2xl p-1 rounded-md bg-[#02236d]' ><AiOutlineSearch></AiOutlineSearch></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default NavBar;