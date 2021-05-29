import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ResumeExp from './ResumeExp';
import ResumeAward from './ResumeAward'; 
import './styles/Resume.css';

function Resume({exp, awards}) {
    return (
        <div className="Resume" id="resume">
        <section className="Resume-edu">
            <div className="container edu">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-7 ml-5 order-2 order-md-1">
                        <div className="row mb-1">
                            <div className="col-md-11">
                                <div className="card border-primary edu-card" data-aos="fade-down-right" data-aos-duration="1500">
                                <div className="edu-icon"><i className="fas fa-university fa-1x"></i></div>
                                <div className="card-body">
                                    <span className="card-subtitle edu-yr">2002 - 2005</span>
                                    <h2 className="card-title edu-name">Bachelor of Computer Technology</h2>
                                    <span className="card-title edu-univ">Kalinga University - Raipur</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
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
                    </div>
                    <div className="col-sm-12 col-md-4 order-1 order-md-2 edu-title">
                        <h1 className="edu-header" data-aos="fade-down" data-aos-duration="1500">Education</h1>
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