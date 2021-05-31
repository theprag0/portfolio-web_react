import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ResumeExp from './ResumeExp';
import ResumeAward from './ResumeAward'; 
import './styles/Resume.css';
import pic5 from './assets/images/pic5.jpeg';
import badge1 from './assets/images/Microsoft Planner Badge.png';
import badge2 from './assets/images/Microsoft Teams Badge.png';
import badge3 from './assets/images/OneDrive - Digital Badge.png';
import badge4 from './assets/images/Scrum Certified Badge.png';
import badge5 from './assets/images/Jira Badge.png';
import badge6 from './assets/images/Zoom Badge.png';

function Resume({exp, awards, keySkills, softSkills, certifications}) {
    return (
        <div className="Resume" id="resume">
        <section className="Resume-edu">
            <div className="container edu">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-7 order-2 order-md-1" id="edu-cards-row">
                        <div className="row mb-2">
                            <div className="col-md-11">
                                <div className="card border-primary edu-card" data-aos="fade-up-right" data-aos-duration="1500">
                                    <div className="edu-icon">
                                        <i className="fas fa-graduation-cap fa-1x" style={{fontSize: "1.7rem", borderRadius: "50%"}}></i>
                                    </div>
                                    <div className="card-body">
                                        <span className="card-subtitle edu-yr">2009 - 2011</span>
                                        <h2 className="card-title edu-name">Master of Business Administration</h2>
                                        <span className="card-title edu-univ">Annamalai University - Chidambaram</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11">
                                <div className="card border-primary edu-card" data-aos="fade-down-right" data-aos-duration="1500">
                                <div className="edu-icon"><i className="fas fa-university fa-1x"></i></div>
                                <div className="card-body">
                                    <span className="card-subtitle edu-yr">2002 - 2005</span>
                                    <h2 className="card-title edu-name">Bachelor of Computer Applications</h2>
                                    <span className="card-title edu-univ">Kalinga University - Raipur</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 order-1 order-md-2 edu-title">
                        <h1 className="edu-header" data-aos="fade-down" data-aos-duration="1500">Education</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="Resume-cert">
            <div className="container">
                <h1 className="cert-header">Certifications</h1>
                <div className="row">
                    {certifications.map(({name, org}) => (
                        <div 
                            className="col-md-4" 
                            style={{marginBottom: "0.5rem"}} 
                            data-aos="fade-up" 
                            data-aos-duration="1500"
                        >
                            <div className="card bg-info text-white" style={{height: "9rem"}}>
                                <div className="card-body cert-content">
                                    <h4 className="card-title">{name}</h4>
                                    <p className="card-text">from <span>{org}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row" style={{marginTop: "3.5rem"}} id="cert-badges" data-aos="fade-down" data-aos-duration="1000">
                    <div className="col-md-2 col-sm-4 cert-badge">
                        <img className="img-fluid" src={badge1} alt="Microsoft Planner Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 cert-badge">
                        <img className="img-fluid" src={badge2} alt="Microsoft Teams Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 cert-badge">
                        <img className="img-fluid" src={badge3} alt="OneDrive Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 cert-badge">
                        <img className="img-fluid" src={badge4} alt="Scrum Certified Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 cert-badge">
                        <img className="img-fluid" src={badge5} alt="Jira Badge"/>
                    </div>
                    <div className="col-md-2 col-sm-4 cert-badge">
                        <img className="img-fluid" src={badge6} alt="Zoom Badge"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="Resume-skills">
            <div className="container-fluid d-flex flex-column" style={{height: "100%"}}>
                <div className="row" id="key-skills">
                    <div className="col-md-6 key-skills-content order-2 order-md-1">
                        <h1>Key Skills</h1>
                        <ul>
                            {keySkills.map(skill => (
                                <li data-aos="fade-up" data-aos-duration="1500">{skill}</li>
                            ))}
                        </ul>
                        <hr className="hr-style2"/>
                        <h1>Soft Skills</h1>
                        <ul>
                            {softSkills.map(skill => (
                                <li data-aos="fade-up" data-aos-duration="1500">{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 key-skills-img order-1 order-md-2">
                        <img className="img-fluid" src={pic5} alt="Mug Banner Pic"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="Resume-exp">
            <div className="container">
                <h1>Experience</h1>
                <div className="Resume-exp-display">
                    {exp.map(e => (
                        <ResumeExp key={uuidv4()} {...e}/>
                    ))}
                </div>
            </div>
        </section>

        <section className="Resume-awards mt-2">
            <div className="container">
                <h1 className="award-header">Awards</h1>
                <div className="row">
                    {
                        awards.map(award => (
                            <ResumeAward key={uuidv4()} {...award}/>
                        ))
                    }
                </div>
            </div>
        </section>
        </div>
    );
}

export default Resume;