import logo from './pngwing.com.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
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
                        <ul className="hidden md:flex flex-row items-center space-x-5">
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
}

export default NavBar;