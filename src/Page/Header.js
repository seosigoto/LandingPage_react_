import React from "react";
import Discord from '../assets/Discord Icon.svg'
import Twitter from '../assets/Twitter Icon.svg'
import Medium from '../assets/Medium Icon.svg'
import DoubleLogo from '../assets/Double Logo.svg'
export function Header() {
    return (
        <div className="header-section">
            <div className="logo">
                <img src={DoubleLogo} alt="double"/>
            </div>
            <div className="social-icons">
                <a href="https://discord.com" target="_blank"><img src={Discord} alt='discord'/></a>
                <a href="https://twitter.com" target="_blank"><img src={Twitter} alt='twitter'/></a>
                <a href="https://medium.com" target="_blank"><img src={Medium} alt='medium'/></a>
            </div>
        </div>
    )
}