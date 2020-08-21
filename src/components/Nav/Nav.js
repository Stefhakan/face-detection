import React from 'react';
import Logo from '../Nav/../Logo/Logo'

const Nav = () => {
    return (
        <div className='nav pa3'>
            <Logo className=''/>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f6 link dim white underline pa3 pointer'>Sign out</p>
            </nav>
        </div>
    )
}

export default Nav;