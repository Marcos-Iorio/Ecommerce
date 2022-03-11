import React from "react";
import logo from '../NavBar/pngwing.com.png'
import './loading.css';

const Loading = () => {
    return(
        <div className="grid place-content-center">
            <img src={logo} alt="Loading Logo" className=" w-12 mr-2 loading" />
        </div>
        
    );
}
export default Loading;