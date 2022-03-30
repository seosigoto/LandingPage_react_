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
            <div className='footer-text'>Let's Double 2 Win!</div>
        </div>
    )
}