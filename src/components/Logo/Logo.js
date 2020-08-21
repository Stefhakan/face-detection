import React from 'react';
import Tilt from 'react-tilt';
import ai from './ai.png';
import './Logo.css';

const Logo = () => {
    return (
       <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 80, width: 80 }} >
            <div className="Tilt-inner pa3">
                <img style={{width:'90px', paddingTop: '2px',paddingLeft: '2px'}}src={ai} alt='logo'/>
            </div>
            </Tilt>
       </div>
    )
}

export default Logo;