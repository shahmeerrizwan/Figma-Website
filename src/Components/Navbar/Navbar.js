import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import linkedin from '../../Assets/in-logo.png';
import linke from '../../Assets/9.png';
import insta1 from '../../Assets/11.png'
import insta from '../../Assets/ig-logo.png';
import { Link } from 'react-router-dom';



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
                <Link to='/'><img className='logoo' src={logo} alt="" /></Link>
            </label>
            <div className={`${menuOpen ? 'openfirst' : 'openscnd'}`}>
                <span className='line'>/</span>
                <span className='grp'>GROUP</span>
            </div>
            <div className={`${menuOpen ? 'openone' : 'opentwo'}`}>
                <div className='link-i-e'>
                    <a href='https://www.instagram.com/_i_am_shahmeer/' target='_blank' rel="noreferrer"> <img src={insta} alt='...' /></a>
                    <a href='https://www.linkedin.com/in/muhammadshahmeerrizwan/' target='_blank' rel="noreferrer"> <img className='img-2' src={linkedin} alt='...' /></a>
                </div>
                <span className='hide-s'>Subscribe</span>
                <span className='hide-s'>|</span>
                <span>Menu</span>
            </div>
            <ul>
                <li><Link onClick={handleMenuItemClick} to="/uberuns">Über uns</Link> </li>
                <li><Link onClick={handleMenuItemClick} to="/captial">Captial</Link></li>
                <li><Link onClick={handleMenuItemClick} to="/consulting">Consulting</Link></li>
                <li><Link onClick={handleMenuItemClick} to="/studios">Studios</Link></li>
                <li><Link onClick={handleMenuItemClick} to="/network">Network</Link></li>
                <li><Link onClick={handleMenuItemClick} to="/sports">Sports</Link></li>
                <li><Link onClick={handleMenuItemClick} to="/contact">Contact</Link></li>
                <span className='s-p-l'> <li className='last-1'>© 2023 COPYRIGHT. <br />
                    <span className='l-n'>IMPRESSUM </span>
                    <span className='l-n'> DATENSCHUTZ</span>  </li>
                    <li className='last-2'>KÜFFNER Group <br />
                        Tölzerstraße 1, 82031 Grünwald <br />
                        info@kueffner-group.com</li>
                    <li><div className='l-n-87'>
                        <a href='https://www.instagram.com/_i_am_shahmeer/' target='_blank' rel="noreferrer">   <img src={insta1} width={"25px"} height={"25px"} alt='...' /></a>
                        <a href='https://www.linkedin.com/in/muhammadshahmeerrizwan/' target='_blank' rel="noreferrer">    <img className='img-2' src={linke} alt='...' /></a>
                    </div></li></span>
            </ul>


        </nav>
    );
};

export default Navbar;