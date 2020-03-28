import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="menu">
            <a href="https://www.nestoria.co.uk">
                <img src="https://resources.nestimg.com/nestoria/img/pbr_v1.png" 
                alt="powered by nestoria.co.uk"  
                style={{ border: 0, padding:0, width: 200, height:22}} />
            </a>
        </div>
    );
};

export default Header;