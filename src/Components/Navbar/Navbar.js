import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import linkedin from '../../Assets/in-logo.png';
import linke from '../../Assets/9.png';

import insta from '../../Assets/ig-logo.png';



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

        <nav >
            <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
            <label htmlFor="click" className="menu-btn">
                <i className="fa fa-align-left"></i>
                <a href='/'><img className='logoo' src={logo} alt="" /></a>
            </label>
            <div className={`${menuOpen ? 'openfirst' : 'openscnd'}`}>
                <span className='line'>/</span>
                <span className='grp'>GROUP</span>
            </div>
            <div className={`${menuOpen ? 'openone' : 'opentwo'}`}>
                <div className='link-i-e'>
                    <img src={insta} alt='...' />
                    <img className='img-2' src={linkedin} alt='...' />
                </div>
                <span className='hide-s'>Subscribe</span>
                <span className='hide-s'>|</span>
                <span>Menu</span>
            </div>
            <ul>
                <li onClick={handleMenuItemClick}>Über uns</li>
                <li onClick={handleMenuItemClick}>Karriere</li>
                <li onClick={handleMenuItemClick}>Captial</li>
                <li onClick={handleMenuItemClick}>Consulting</li>
                <li onClick={handleMenuItemClick}>Studios</li>
                <li onClick={handleMenuItemClick}>Network</li>
                <li onClick={handleMenuItemClick}>Sports</li>
                <li onClick={handleMenuItemClick}>Kontakt</li>
                <li className='last-1'>© 2023 COPYRIGHT. <br />
                    <span className='l-n'>IMPRESSUM </span>
                    <span className='l-n'> DATENSCHUTZ</span>  </li>
                <li className='last-2'>KÜFFNER Group <br />
                    Tölzerstraße 1, 82031 Grünwald <br />
                    info@kueffner-group.com</li>
                <li><div className='l-n-87'>
                    <img src={insta} alt='...' />
                    <img className='img-2' src={linke} alt='...' />
                </div></li>
            </ul>


        </nav>
    );
};

export default Navbar;