import React from 'react';
import './App.css';
import logo2 from './image/nig2.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Footer = () => (

    <div className="footer">
        <div className="profile">
       <icon><FacebookIcon /></icon> 
        <icon><LinkedInIcon /></icon>
        <icon><TwitterIcon /></icon>
        </div>
        <div className="profileaside">
        <div className="text">
            5 best place visit in Nigeria More < ArrowRightAltIcon />
        </div>
        <div className="images">
            <img src={logo2} alt="Nigeria country"/>
        </div>

        </div>
    </div>
);

export default Footer;