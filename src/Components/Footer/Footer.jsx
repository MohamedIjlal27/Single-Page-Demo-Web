import React from 'react'
import "./Footer.css"
import { FaArrowRight } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <h1>Corporate information</h1>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.cinnamonhotels.com/about-us">Cinnamon Hotels & Resorts</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.keells.com/">John Keells Group</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h1>Blogs</h1>
                <ul>
                    <li>
                        <a target='_blank' href="https://blog.cinnamonhotels.com/?_gl=1*u9ffth*_gcl_au*MTg0NDMzMzMzNC4xNzA3Mzc5NTM1*_ga*MTU0MzQzNjU3LjE3MDczNzk1NTA.*_ga_SQP5B6X1B2*MTcwNzU2ODgyNi40LjEuMTcwNzU3MDIxOC4zNi4wLjA.&_ga=2.71232976.1568440686.1707467803-154343657.1707379550">Cinnamon Ublog</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h1>Careers</h1>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.cinnamonhotels.com/careers">Careers</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h1>News and Awards</h1>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.cinnamonhotels.com/media-accolades">News</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.cinnamonhotels.com/media-accolades#tabs3">Awards</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h1>Corporate Governance</h1>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.cinnamonhotels.com/cinnamon-csr-sustainability">CSR</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h1>Data Privacy & Security Policy</h1>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.cinnamonhotels.com/terms-and-conditions">Terms & Conditions</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.cinnamonhotels.com/privacy-statement">Privacy Statement</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h1>Get In Touch</h1>
                <ul>
                    <li>
                        <a target='_blank' href="mailto:info@cinnamonhotels.com">info@cinnamonhotels.com</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a target='_blank' href="https://cinnamonhotels.freshdesk.com/support/home">Hotel Contact Information</a>
                    </li>
                </ul>
            </div>

            <div className="footer-section">
                <h1>Get Cinnamon in your inbox</h1>
                <div className="email-input">
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <button><FaArrowRight /></button>
                </div>
                <div className="terms-checkbox">
                    <input type="checkbox" id="terms" name="terms" />
                    <label htmlFor="terms">I agree to the Terms and Conditions</label>
                </div>
            </div>


        </div>
    )
}

export default Footer
