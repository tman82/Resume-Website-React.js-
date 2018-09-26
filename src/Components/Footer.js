import React from 'react';
import navIconIn from '../nav-in.png';
import './Footer.css';


const Footer = () => {
    return(
        <div className="container-fluid">
            <div className="row footer-block">
                  <div className="col-lg-12">
                    <ul className="copy-list">
                        <li id="copy">&copy; Erica Hawkins 2018</li>
                        <li id="gmail"><a href="mailto:prettylexus05@gmail.com">Gmail</a></li>
                        <li><a href="https://www.facebook.com/people/Erica-Hawkins/100011038113419">Facebook</a></li>
                        <li className="twoGroup" id="g1"><a href="mailto:esykes1983@gmail.com">Email</a></li>
                        <li className="twoGroup" id="g2"><a href="https://www.linkedin.com/in/erica-hawkins-86a51b124/"><img src={navIconIn} alt=""/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
