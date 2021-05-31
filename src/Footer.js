import React from 'react';
import './styles/Footer.css';

function Footer({email, phone, skype}) {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5" id="footer-about">
                        <h1>About</h1>
                        <p>
                        As Emerging Director of Technology, 
                        overseeing the infrastructure of technical 
                        operations, managing a team of IT 
                        Employees, and tracking technology in 
                        order to achieve business goals, 
                        eliminating security risks, increasing user 
                        satisfaction and maintaining operations 
                        and systems
                        </p>
                    </div>
                    <div className="col-md-3" id="quick-links">
                        <h1>Quick Links</h1>
                        <ul>
                            <li><a href="#home"><i className="fas fa-arrow-right"></i> Home</a></li>
                            <li><a href="#about"><i className="fas fa-arrow-right"></i> About</a></li>
                            <li><a href="#resume"><i className="fas fa-arrow-right"></i> Resume</a></li>
                            <li><a href="#contact"><i className="fas fa-arrow-right"></i> Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4" id="footer-contact">
                        <h1>Have Questions?</h1>
                        <p>
                            <span><i className="fas fa-phone-alt"></i></span>
                            {phone}
                        </p>
                        <p>
                            <span><i className="fas fa-envelope"></i></span>
                            {email}
                        </p>
                        <p>
                            <span><i className="fab fa-skype"></i></span>
                            {skype}
                        </p>
                        <a id="fb" href="https://www.facebook.com/gr.saran" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a id="linkedin" href="https://www.linkedin.com/in/saravanan-rathinam-778a0a49/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;