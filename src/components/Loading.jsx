import React from "react";
import logo from '../pngwing.com.png'
import '../App.css';

const Loading = () => {
    return(
        <div className="grid place-content-center">
            <img src={logo} alt="Loading Logo" className=" w-12 mr-2 App-logo" />
        </div>
        
    );
}
export default Loading;