import logo from '../logo.svg';
import '../App.css';
import CartWidget from './CartWidget';

import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="bg-zinc-800 shadow-lg h-500">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <a href="#" className="flex items-center py-4 px-2">
                            <img src={logo} alt="Logo" className="h-20 w-20 mr-2 App-logo" />
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-5">
                        <a href="" className="py-4 px-2 text-white border-b-4 border-yellow-400 font-semibold">
                            Home
                        </a>
                        <a href="" className="py-4 px-2 text-white font-semibold hover:text-yellow-400">
                            Tienda
                        </a>
                        <a href="" className="py-4 px-2 text-white font-semibold hover:text-yellow-400">
                            Nosotros
                        </a>
                        <a href="" className="py-4 px-2 text-white font-semibold hover:text-yellow-400 ">
                            Contacto
                        </a>
                    </div>
                    <div className='flex items-center justify-center p-5 w-80'>
                        <a href="" className="pt-2 pb-2 px-2 m-5 font-semibold transition-all delay-75 bg-yellow-400 rounded-lg hover:bg-white">
                            <AiOutlineUser className="text-[24px] text-zinc-800"/>
                        </a>
                        <CartWidget/>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;