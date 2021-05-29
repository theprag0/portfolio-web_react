import React from 'react';
import './styles/ResumeAward.css';

function ResumeAward({awardImg, award, date, awardText, dataAos}) {
    return (
        <div className="col-sm-12 col-md-6">
            <div className="card award-card border-info" data-aos={dataAos} data-aos-duration="1500">
                <img className="card-img-top img-fluid" src={awardImg} alt="Arab Tech Award"/>
                <div className="card-body award-content">
                    <h1 className="card-title">{award}</h1>
                    <h3 className="card-subtitle">{date}</h3>
                    <p className="card-text">
                        {awardText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResumeAward;