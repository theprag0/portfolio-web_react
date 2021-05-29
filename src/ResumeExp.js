import React from 'react';
import './styles/ResumeExp.css';

function ResumeExp({date, role, company}) {
    return (
        <div className="exp-content" data-aos="fade-up" data-aos-duration="1500">
            <i className="fas fa-suitcase"></i>
            <span className="exp-date">{date}</span>
            <h2>{role}</h2>
            <span className="exp-company">{company}</span>
            <hr className="fancy-line"/>
        </div>
    )
}

export default ResumeExp;