// Footer.js
import React from 'react';
import QRcode from './qrcode.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter, faInstagram, faYoutube, faLinkedin, faXTwitter,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Create this file for styles


const Footer = () => {
    return (
        <footer className="footer">
            <div className='social-media-box'>
                <div className="social-media">
                    <span className='social-media-text'>Follow IMDb on social</span>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/anuragmishra28/" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='icon' icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=k3g_WjLCsXM&list=RDk3g_WjLCsXM&start_radio=1" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='icon' icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://x.com/?lang=en" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='icon' icon={faXTwitter} size="2x" />
                        </a>


                        <a href="https://www.instagram.com/anuragab28/" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='icon' icon={faInstagram} size="2x" />
                        </a>

                        <a href="https://github.com/anurag2801/imdb-clone" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='icon' icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="app-download">
                <span className='app-download-text'>Get the IMDb app</span>
                <p className='download-text'>For Android and iOS</p>
                {/* QR code can be inserted as an image */}
                <a href="https://slyb.app.link/Aa96cLcBeAb" target="_blank">  <img src={QRcode} alt="QR Code" className="qr-code" /> </a>
            </div>
            <div className="footer-links">
                <a href="#">Help</a>
                <a href="#">Site Index</a>
                <a href="#">IMDbPro</a>
                <a href="#">Box Office Mojo</a>
                <a href="#">License IMDb Data</a>
                <a href="#">Press Room</a>
                <a href="#">Advertising</a>
                <a href="#">Jobs</a>
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Your Ads Privacy Choices</a>
            </div>
            <div className="footer-bottom">
                {/* <span>© 1990-2024 by IMDb.com, Inc.</span> */}
                <span>Anurag Website</span>
            </div>
        </footer>
    );
};

export default Footer;