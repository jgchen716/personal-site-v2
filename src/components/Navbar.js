import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClicked(!clicked);
    const closeMobileMenu = () => setClicked(false);
    const scrollToTop = () => {scroll.scrollToTop();};

    const clickIcon = function() {
        closeMobileMenu();
        scrollToTop();
    };

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <IconContext.Provider value={{color: '#31de79'}}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' onClick={clickIcon}>
                        jonathan chen
                        <FaLaptopCode className='navbar-icon' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {clicked ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                                to='home' 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='nav-links' 
                                onClick={closeMobileMenu} 
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            to='skills' 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='nav-links' 
                            onClick={closeMobileMenu} 
                            >
                                Skills
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            to='experience' 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='nav-links' 
                            onClick={closeMobileMenu} 
                            >
                                Experience
                            </Link>
                        </li>
                        <li className='nav-item last'>
                            <Link 
                            to='projects' 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='nav-links' 
                            onClick={closeMobileMenu} 
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} className='btn--link'>
                                    <Button buttonStyle='btn--outline'>Contact</Button>
                                </Link>
                            ) : (
                                <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} className='btn--link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Contact</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Navbar;
