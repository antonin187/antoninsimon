import React from 'react';
import './NavBar.css'

export default function Navbar() {
    return(
        <div className='container'>
            <div className='navbarContainer'>
                <div className='startDiv'>
                    My Logo
                </div>
                <div className='endDiv'>
                    <div className='libelleEndDiv'>
                        Antonin SIMON
                    </div>
                    <div className='burger'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>


            <div className='lineContainer'>
                <span className='line'></span>
            </div>
        </div>
    )
}