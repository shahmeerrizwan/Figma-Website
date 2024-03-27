import React, { useState, useEffect } from 'react';
import logo from '../../Assets/logo.png';
import linkedin from '../../Assets/in-logo.png';
import insta from '../../Assets/ig-logo.png';


import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div>
            <nav >
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fa fa-align-left"></i>
                    <div >
                        <a href='/'><img className='logoo' src={logo} alt="" /></a>
                        <span className='line'>/</span>
                        <span className='grp'>GROUP</span>
                    </div>
                </label>
                <ul>
                    <li onClick={handleMenuItemClick} ><img src={insta} alt='...' /></li>
                    <li onClick={handleMenuItemClick} ><img src={linkedin} alt='...' /></li>

                    <li onClick={handleMenuItemClick} >Subscribe</li>
                    <li onClick={handleMenuItemClick}>|</li>
                    <li onClick={handleMenuItemClick}>Menu</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;