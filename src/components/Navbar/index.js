import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { DeviceSize } from "./responsiveness";
import { animateScroll as scroll } from 'react-scroll';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-scroll';
import MenuToggle from './menuToggle';
import image from '../../images/logo.png';

export default function Navbar() 
{
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const [navbar, setNavbar] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const toggleHome = () => 
    {
        scroll.scrollToTop();
    }

    const changeBackground = () =>
    {
        window.scrollY >= 70 ? setNavbar(true) : setNavbar(false);
    }

    const handleExpand = () => 
    {
        setExpanded(!expanded);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={isMobile || navbar ? "navbar-container active" : "navbar-container"}>
            <div className="navbar-elements">
                <div className="logo" onClick={toggleHome}>
                    <img src={image} alt=""/>
                </div>
                <div className="navlinks-container">
                    <ul className="links-wrapper">
                        {!isMobile ?
                        <>
                            <li className="link-item">
                                <motion.div
                                    whileHover={{ rotateZ: -10, scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    style={{display: 'flex', alignItems: 'center'}}>
                                        <Link className="link" exact='true'
                                            smooth={true} offset={-70}
                                            duration={1000} spy={true}
                                            to='tips'>טיפים</Link>
                                </motion.div>
                            </li>
                            <li className="link-item">
                                <motion.div
                                        whileHover={{ rotateZ: -10, scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        style={{display: 'flex', alignItems: 'center'}}>
                                    <Link className="link"
                                        smooth={true} duration={1000} spy={true}
                                        exact='true' offset={-20}
                                        to='summaries'>סיכומים</Link>
                                </motion.div>
                            </li>
                            <li className="link-item">
                                <motion.div
                                        whileHover={{ rotateZ: -10, scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        style={{display: 'flex', alignItems: 'center'}}>
                                    <Link className="link"
                                        smooth={true} duration={1000} spy={true}
                                        exact='true' offset={-20}
                                        to='links'>לינקים</Link>
                                </motion.div>
                            </li>
                        </>
                        :
                        <li className="link-item hamburger">
                            <MenuToggle isOpen={expanded} toggle={() => setExpanded(!expanded)} />
                        </li>}
                    </ul>
                </div>
            </div>
            <Collapse in={expanded} unmountOnExit className="mobile-navbar-container">
                <div className="mobile-navbar-elements">
                    <ul className="mobile-links-wrapper">
                        <li className="mobile-link-item">
                            <Link className="link" exact='true'
                                smooth={true} offset={-70}
                                duration={1000} spy={true}
                                onClick={handleExpand}
                                to='tips'>טיפים</Link>
                        </li>
                        <li className="mobile-link-item">
                            <Link className="link" exact='true'
                                    smooth={true} offset={-20}
                                    duration={1000} spy={true}
                                    onClick={handleExpand}
                                    to='summaries'>סיכומים</Link>
                        </li>
                        <li className="mobile-link-item">
                            <Link className="link" exact='true'
                                    smooth={true} offset={-20}
                                    duration={1000} spy={true}
                                    onClick={handleExpand}
                                    to='links'>לינקים</Link>
                        </li>
                    </ul>
                </div>
            </Collapse>
        </div>
    )
}