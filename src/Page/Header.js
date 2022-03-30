import React from "react";
import Discord from '../assets/Discord Icon.svg'
import Twitter from '../assets/Twitter Icon.svg'
import Medium from '../assets/Medium Icon.svg'
export function Header() {
    return (
        <div className="header-section">
            <div className="logo">
                !!
            </div>
            <div className="social-icons">
                <img src={Discord} alt='discord'/>
                <img src={Twitter} alt='twitter'/>
                <img src={Medium} alt='medium'/>
            </div>
        </div>
    )
}