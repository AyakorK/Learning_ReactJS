import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footerContainer">
            <footer>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/guillaume-moret-developpeur-informatique/" target="_blank">
                    <FontAwesomeIcon id="linkedIn" icon={faLinkedin} />
                    </a>
                    {/* Github */}
                    <a  href="https://github.com/AyakorK" target="_blank">
                    <FontAwesomeIcon id="github" icon={faGithub} />
                    </a>
                    {/* Twitter */}
                     <a href="https://twitter.com/AyakorK" target="_blank">
                    <FontAwesomeIcon id="twitter" icon={faTwitter} />
                    </a> 
                <p>
                    Made with <span role="img" aria-label="heart">❤️</span> by Ayakor
                </p>
                </div>
                <div className="copyright">
                    <p>      
                        © 2022 Ayakor <br />
                        All rights reserved
                    </p>
                </div>
                <div className="contactMe">
                    <NavLink to="/contact">
                        <p>Contact Me</p>
                    </NavLink>
                </div>
            </footer>
        </div>
    );
};

export default Footer;