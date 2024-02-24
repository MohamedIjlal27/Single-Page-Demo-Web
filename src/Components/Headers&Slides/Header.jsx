import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../../assets/SHANGRI LA_LOGO_0.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Slides from './Slides';

const currencies = [
    'CNY', 'USD', 'GBP', 'SGD', 'LKR'
];

function Header() {
    const [language, setLanguage] = useState('English');
    const [currency, setCurrency] = useState('LKR');
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const languageRef = useRef(null);
    const currencyRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setLanguageDropdownOpen(false);
            }
            if (currencyRef.current && !currencyRef.current.contains(event.target)) {
                setCurrencyDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setLanguageDropdownOpen(false);
    };

    const handleCurrencyChange = (selectedCurrency) => {
        setCurrency(selectedCurrency);
        setCurrencyDropdownOpen(false);
    };

    const handlePop = () => {
        handleShow(true);
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <img src={LogoImage} alt="Shangri-La Logo" />
                </div>
                <div className='nav'>
                    <NavLink className='navLink' onClick={() => handlePop()}>
                        <FontAwesomeIcon icon={faUser} /> Sign In
                    </NavLink>
                    <span className='separator'>|</span>
                    <a className='navLink' target='_blank' href="https://www.shangri-la.com/en/corporate/shangrilacircle/joingc/?redirect=">
                        Join Now
                    </a>
                    <span className='separator'>|</span>
                    <a className='navLink' target='_blank' href="https://www.shangri-la.com/en/corporate/shangrilacircle/online-services/reservations-query/">
                        Find Reservation
                    </a>
                    <span className='separator'>|</span>
                    <div className='navLink' ref={languageRef} onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
                        <FontAwesomeIcon icon={faGlobe} /> {language}
                        <ul className={languageDropdownOpen ? 'dropdown-menu open' : 'dropdown-menu'}>
                            <li><a href="#" onClick={() => handleLanguageChange('简体中文')}>简体中文</a></li>
                            <li><a href="#" onClick={() => handleLanguageChange('日本語')}>日本語</a></li>
                            <li><a href="#" onClick={() => handleLanguageChange('English')}>English</a></li>
                        </ul>
                    </div>
                    <span className='separator'>|</span>
                    <div className='navLink' ref={currencyRef} onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}>
                        {currency}
                        <ul className={currencyDropdownOpen ? 'dropdown-menu open' : 'dropdown-menu'}>
                            {currencies.map(currency => (
                                <li key={currency}><a href="#" onClick={() => handleCurrencyChange(currency)}>{currency}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} centered className="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row className="mb-3">
                            <Col>
                                <label htmlFor="verified_email" className="form-label">
                                    Verified Email
                                </label>
                                <input
                                    type="email"
                                    id="verified_email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                />
                            </Col>
                            <Col>
                                <Button className='btn' variant="secondary">Send</Button>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <label htmlFor="verification_code" className="form-label">
                                    Verification Code
                                </label>
                                <input
                                    type="text"
                                    id="verification_code"
                                    placeholder="Enter verification code"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Sign In Now</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='header2'>
                <a className='navLink' onClick={() => handleScroll('about')}>
                    About
                </a>
                <a className='navLink' onClick={() => handleScroll('destination')}>
                    Our Destination
                </a>
                <a className='navLink' onClick={() => handleScroll('experience')}>
                    Experience Something New
                </a>
                <a className='navLink' onClick={() => handleScroll('offers')}>
                    Offers
                </a>
            </div>
            <div>
                <Slides />
            </div>
        </div>
    )
}

export default Header;
