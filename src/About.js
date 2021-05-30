import React from 'react';
import './styles/About.css';

function About({mainImg, firstName, lastName, email, phone, dob, cv, skype}) {
    return (
        <section className="About container" id="about">
            <div className="row justify-content-center">
               <div className="col-md-6">
                    <img className="img-fluid main-img" src={mainImg} alt="Main portfolio"/>
                </div> 
                <div className="col-md-6 About-contents">
                    <h1>About Me</h1>
                    <p>
                        Technically sophisticated and Business-savvy Management Professional with a pioneering career reflecting strong leadership qualification. 
                        Maintain focus on achieving bottom-line results while formulating and implementing advanced technology and business solutions to meet a diversity of needs. 
                        In the past 20 + years of IT Industry expertise, delivered best cost saving simultaneous large-scale, mission-critical projects on time.
                    </p>
                    <ul className="About-info">
                        <li className="d-flex">
                            <span><strong>Name:</strong></span>
                            <span>{firstName} {lastName}</span>
                        </li>
                        <li className="d-flex">
                            <span><strong>DOB:</strong></span>
                            <span>{dob}</span>
                        </li>
                        <li className="d-flex">
                            <span><strong>Email:</strong></span>
                            <span>{email}</span>
                        </li>
                        <li className="d-flex">
                            <span><strong>Skype:</strong></span>
                            <span>{skype}</span>
                        </li>
                        <li className="d-flex">
                            <span><strong>Phone:</strong></span>
                            <span>{phone}</span>
                        </li>
                    </ul>
                    <a href={cv} download="Saran_CV.pdf">Download CV</a>
                </div>
            </div>
        </section>
    );
}

export default About;