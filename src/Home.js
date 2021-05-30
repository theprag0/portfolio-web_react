import React from 'react';
import Typical from 'react-typical';
import './styles/Home.css';

function Home({firstName, lastName, roles}) {
    return (
        <div className="Home" id="home">
            <div className="Home-overlay"/>
            <div className="Home-content">
                <span className="Home-intro">Hey! I am</span>
                <h1 className="Home-name">{firstName} {lastName}</h1>
                <h3>
                    I am {' '}
                    <span>
                        <Typical 
                            steps={roles}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </span>
                </h3>
            </div>
            {/* <div className="mouse">
                <a href="#about" className="mouse-icon">
                    <div className="mouse-wheel">
                        <i className="fas fa-arrow-down fa-sm"></i>
                    </div>
                </a>
            </div> */}
        </div>
    );
}

export default Home;