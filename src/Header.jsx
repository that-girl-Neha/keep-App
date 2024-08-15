import React from 'react';
import Image from './Images/logo.png';
import Search from './Search';
const Header=()=>{

    return (<>
           
           <div className='header'>
            <img src={Image} alt="logo" width='70px' heigh='50px' />
            <h1>KEEP </h1>
           
           </div>
    </>);
}

export default Header;