import React from 'react';
import './styles/Footer.css';
import badge1 from './assets/images/Microsoft Planner Badge.png';
import badge2 from './assets/images/Microsoft Teams Badge.png';
import badge3 from './assets/images/OneDrive - Digital Badge.png';
import badge4 from './assets/images/Scrum Certified Badge.png';
import badge5 from './assets/images/Jira Badge.png';
import badge6 from './assets/images/Zoom Badge.png';

function Footer(props) {
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
                            +91 6374-200-295
                        </p>
                        <p>
                            <span><i className="fas fa-envelope"></i></span>
                            saranvanangr@gmail.com
                        </p>
                        <p>
                            <span><i class="fab fa-skype"></i></span>
                            sarangr007
                        </p>
                        <a id="fb" href="https://www.facebook.com/gr.saran" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a id="linkedin" href="https://www.linkedin.com/in/saravanan-rathinam-778a0a49/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        {/* <a id="linkedin" href="skype:sarangr007?userinfo" target="_blank" rel="noreferrer">
                            <i class="fab fa-skype"></i>
                        </a> */}
                    </div>
                </div>
                <div className="row" style={{marginTop: "3.5rem"}} id="footer-badges">
                    <div className="col-md-2 col-sm-4 footer-badge">
                        <img className="img-fluid" src={badge1} alt="Microsoft Planner Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 footer-badge">
                        <img className="img-fluid" src={badge2} alt="Microsoft Teams Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 footer-badge">
                        <img className="img-fluid" src={badge3} alt="OneDrive Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 footer-badge">
                        <img className="img-fluid" src={badge4} alt="Scrum Certified Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 footer-badge">
                        <img className="img-fluid" src={badge5} alt="Jira Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 footer-badge">
                        <img className="img-fluid" src={badge6} alt="Zoom Badge"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;