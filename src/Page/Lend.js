import React from 'react';
import MainImg from '../assets/main_Graphic.svg';

export default function Lend() {
    return(
        <div className='main-section'>
            <div className='discription'>
                <p>The one and only LP community.</p>
                <p>Linking projects to Liquidity & doubling profit for LPs.</p>
            </div>
            <img src={MainImg} alt='Main'/>
            <div className='footer-text'>
                <a href="https://medium.com/@double2win/double-to-win-e38001f46e2e" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}}>
                Let's Double 2 Win!
                </a>                
            </div>
        </div>
    )
}