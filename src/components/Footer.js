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
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    {/* Github */}
                    <a href="https://github.com/AyakorK" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {/* Twitter */}
                     <a href="https://twitter.com/AyakorK" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a> 
                </div>
                <p>
                    Made with <span role="img" aria-label="heart">❤️</span> by Ayakor
                </p>
                <div className="copyright">
                    <p>      
                        © 2022 Ayakor
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;